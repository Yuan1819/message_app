<template>
  <div>
    <p v-if="inbox_msgs.length == 0 && !loading">No messages here</p>
    <p v-if="loading">Loading...</p>
    <ul class="list-msgs" :class="{showContent: selected_msg != null}">
      <li v-for="msg in inbox_msgs" :key="msg.id" :class="{active: selected_msg == msg, unread: msg.unread}">
        <a class="msg-row" href="javascript:void(0)" @click="read_msg(msg)">
          <span>{{ msg.subject}}</span>
          <p class="content">{{ msg.message.content }}</p>
          <p class="date">{{ msg.message.sender.email }}{{ msg.date}}</p>
        </a>
        <a class="delete" href="javascript:void(0)" @click="delete_msg(msg)"><span>&times;</span></a>
      </li>
    </ul>
    <div v-if="selected_msg" class="msg-content">
      <p>From: {{ selected_msg.message.sender.username }} <{{ selected_msg.message.sender.email }}></p>
      <div class="m-content">{{ selected_msg.message.content }}</div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "InboxMessages",
  data() {
    return {
      selected_msg: null,
      loading: false
    }
  },
  computed: {
    ...mapState(['inbox_msgs']),
  },
  created() {
    this.loading = true;
    this.$store.dispatch('getInboxMsgs').then(() => {
      this.loading = false
    });;
  },
  methods: {
    read_msg(msg) {
      this.selected_msg=msg;
      msg.unread = false;
    },
    delete_msg(msg) {
      let index = this.inbox_msgs.indexOf(msg);
      if (index != -1) {
        this.$store.dispatch('delInboxMsgs', index);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.msg-content {
  height: 40vh;
  border-top: 1px solid #ccc;
  padding: 5px;
  overflow: auto;
}
.showContent {
  height: 40vh;
  overflow: auto;
}
.m-content {
  white-space: pre-line;
}
.list-msgs {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;

  li.active {
    background-color: #e3e3e3;
  }
  li.unread {
    a {
      font-weight: bold;
    }
  }
  li {
    padding: 5px 10px;
    border-bottom: 1px solid #e3e3e3;
    position: relative;
    a.msg-row {
      display: block;
      text-decoration: none;
      position: relative;
      span {
        color: #000;
      }
      p {
        color: #000;
        font-size: 80%;
        margin-bottom: 0;
      }
      p.content {
        width: 70%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .date {
        position: absolute;
        right: 0;
        top: 15px
      }
    }
    a.delete {
      position: absolute;
      right: 5px;
      top: 15px;
      display: none;
      text-decoration: none;
      color: #000;
      span {
        font-size: 18px;
        background-color: #fff;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  li:hover {
    a.delete {
      display: block;
    }
  }
  li:last-child {
    border-bottom: none;
  }
}
</style>

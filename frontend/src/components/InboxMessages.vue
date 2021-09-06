<template>
  <div>
    <ul class="list-msgs" :class="{showContent: selected_msg != null}">
      <li v-for="msg in msgs" :key="msg.id" :class="{active: selected_msg == msg, unread: msg.unread}">
        <a class="msg-row" href="javascript:void(0)" @click="read_msg(msg)">
          <span>{{ msg.from}}</span>
          <p>{{ msg.content }}</p>
          <p class="date">{{ msg.date}}</p>
        </a>
        <a class="delete" href="javascript:void(0)" @click="delete_msg(msg)">&times;</a>
      </li>
    </ul>
    <div v-if="selected_msg" class="msg-content">
      <p>{{ selected_msg.from }}</p>
      {{ selected_msg.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "InboxMessages",
  data() {
    return {
      selected_msg: null,
      msgs: [
        {from: 'Doan Phi', content: 'Here is content', date: '2021-03-21', id: 1, unread: true},
        {from: 'Doan Hong Phi', content: 'Here is content2', date: '2021-04-21', id: 2, unread: true},
        {from: 'Doan Hong Phi', content: 'Here is content3', date: '2021-04-21', id: 3, unread: true},
        {from: 'Doan Hong Phi', content: 'Here is content4', date: '2021-04-21', id: 4, unread: true},
        {from: 'Doan Hong Phi', content: 'Here is content5', date: '2021-04-21', id: 5, unread: true},
        {from: 'Doan Hong Phi', content: 'Here is content6', date: '2021-04-21', id: 6, unread: true},
        {from: 'Doan Hong Phi', content: 'Here is content7', date: '2021-04-21', id: 7, unread: true},
        {from: 'Doan Hong Phi', content: 'Here is content8', date: '2021-04-21', id: 8, unread: true},
      ]
    }
  },
  methods: {
    read_msg(msg) {
      this.selected_msg=msg;
      msg.unread = false;
    },
    delete_msg(msg) {
      let index = this.msgs.indexOf(msg);
      if (index != -1) {
        this.msgs.splice(index, 1);
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
      font-size: 18px;
      background-color: #fff;
      padding: 0 10px 0 3em;
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

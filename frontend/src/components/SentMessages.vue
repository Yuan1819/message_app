<template>
  <div>
    <ul class="list-msgs" :class="{showContent: selected_msg != null}">
      <li v-for="msg in msgs" :key="msg.id" :class="{active: selected_msg == msg}">
        <a href="javascript:void(0)" @click="selected_msg=msg">
          <span>To: {{ msg.from}}</span>
          <p>{{ msg.content }}</p>
          <p class="date">{{ msg.date}}</p>
        </a>
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
  name: "SentMessages",
  data() {
    return {
      selected_msg: null,
      msgs: [
        {from: 'Doan Phi', content: 'Here is content', date: '2021-03-21', id: 1},
        {from: 'Doan Hong Phi', content: 'Here is content2', date: '2021-04-21', id: 2},
        {from: 'Doan Hong Phi', content: 'Here is content3', date: '2021-04-21', id: 3},
        {from: 'Doan Hong Phi', content: 'Here is content4', date: '2021-04-21', id: 4},
        {from: 'Doan Hong Phi', content: 'Here is content5', date: '2021-04-21', id: 5},
        {from: 'Doan Hong Phi', content: 'Here is content6', date: '2021-04-21', id: 6},
        {from: 'Doan Hong Phi', content: 'Here is content7', date: '2021-04-21', id: 7},
        {from: 'Doan Hong Phi', content: 'Here is content8', date: '2021-04-21', id: 8},
      ]
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
  li {
    padding: 5px 10px;
    border-bottom: 1px solid #e3e3e3;

    a {
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
  }
  li:last-child {
    border-bottom: none;
  }
}
</style>

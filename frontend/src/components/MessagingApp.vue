<template>
  <div class="d-flex flex-column">
    <div class="my-2">
      <a href="javascript:void(0)" class="btn btn-primary btn-sm" @click="selected='compose'">Compose</a>
    </div>
    <div class="row">
      <div class="col-3 side-menu">
        <ul>
          <li :class="{active: selected == 'inbox'}"><a href="javascript:void(0)" @click="selected='inbox'">Inbox</a></li>
          <li :class="{active: selected == 'sent'}"><a href="javascript:void(0)" @click="selected='sent'">Sent</a></li>
        </ul>
      </div>
      <div class="col-9">
        <inbox-messages v-if="selected == 'inbox'"></inbox-messages>
        <sent-messages v-if="selected == 'sent'"></sent-messages>
        <compose-message v-if="selected == 'compose'" :select-tap="selectTab"></compose-message>
      </div>
    </div>
  </div>
</template>

<script>
import InboxMessages from "./InboxMessages";
import SentMessages from "./SentMessages";
import TrashMessages from "./TrashMessages";
import ComposeMessage from "./ComposeMessage";
export default {
  name: "MessagingApp",
  components: {ComposeMessage, SentMessages, InboxMessages},
  data() {
    return {
      selected: 'inbox',
    }
  },
  created() {
    this.$store.dispatch('getMe');
    this.$store.dispatch('getUsers');
  },
  methods: {
    selectTab(tab) {
      this.selected = tab;
    }
  }
}
</script>

<style scoped lang="scss">
.side-menu {
  border-right: 1px solid #ccc;
  height: calc(100vh - 100px);
  ul {
    list-style: none;
    padding-left: 0;
    li {
      padding: 5px 10px;
      display: block;
      a {
        text-decoration: none;
        color: #000;
        display: block;
      }
    }
    li.active {
      background-color: #ccc;
    }
  }
}
</style>

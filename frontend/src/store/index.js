import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)


const vStore = new Vuex.Store({
  state: {
    users: [],
    inbox_msgs: [],
    sent_msgs: [],
    me: null
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setMe(state, me) {
      state.me = me
    },
    setInboxMsg(state, msgs) {
      state.inbox_msgs = msgs
    },
    delInboxMsg(state, index) {
      state.inbox_msgs.splice(index, 1);
    },
    setSentMsg(state, msgs) {
      state.sent_msgs = msgs
    },
    delSentMsg(state, index) {
      state.sent_msgs.splice(index, 1);
    }
  },
  actions: {
    getUsers(context) {
      axios.defaults.headers.common['X-CSRFToken'] = document.querySelector('[name=csrfmiddlewaretoken]').value;
      axios.get('/api/users').then((res) => {
        context.commit('setUsers', res.data);
      })
    },
    getMe(context) {
      axios.get('/api/users/me/').then((res) => {
        context.commit('setMe', res.data);
      })
    },
    getInboxMsgs(context) {
      return axios.get('/api/messages/inbox/').then((res) => {
        context.commit('setInboxMsg', res.data);
      })
    },
    delInboxMsgs(context, msg) {
      let index = context.state.inbox_msgs.indexOf(msg);
      if (index != -1) {
        context.commit('delInboxMsg', index)
        axios.post(`/api/messages/inbox/${msg.id}/delete/`).then((res) => {
        })
      }
    },
    getSentMsgs(context) {
      return axios.get('/api/messages/sent/').then((res) => {
        context.commit('setSentMsg', res.data);
      })
    },
    delSentMsgs(context, msg) {
      let index = context.state.sent_msgs.indexOf(msg);
      if (index != -1) {
        context.commit('delSentMsg', index)
        axios.post(`/api/messages/sent/${msg.id}/delete/`).then((res) => {
        })
      }
    }
  },
  modules: {
  }
})

Vue.prototype.$store = vStore;
window.vStore = vStore;
export default vStore

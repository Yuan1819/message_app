import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const vStore = new Vuex.Store({
  state: {
    users: [],
    me: null
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    },
    setMe(state, me) {
      state.me = me
    }
  },
  actions: {
    getUsers(context) {
      axios.get('/api/users').then((res) => {
        context.commit('setUsers', res.data);
      })
    },
    getMe(context) {
      axios.get('/api/users/me/').then((res) => {
        context.commit('setMe', res.data);
      })
    }
  },
  modules: {
  }
})

Vue.prototype.$store = vStore;
window.vStore = vStore;
export default vStore

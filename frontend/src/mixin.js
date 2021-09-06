import Vue from "vue";
import axios from "axios";

Vue.mixin({
  computed: {
    axios() {
        debugger
      return axios.create({
          headers: {
              'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
          }
      })
    }
  }
})

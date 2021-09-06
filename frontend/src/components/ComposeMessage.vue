<template>
  <div>
    <form @submit="handleSubmit" class="needs-validation" novalidate>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Subject</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" value="" required v-model="msg.subject">
          <div class="invalid-feedback">
            Please input subject.
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">To:</label>
        <div class="col-sm-10">
          <select class="form-control" required  v-model="msg.to">
            <option value="" disabled selected>---</option>
            <option v-for="user in users" v-show="user.id != me.id" :value="user.username">{{user.username }} - {{ user.email }}</option>
          </select>
          <div class="invalid-feedback">
            Please select a item.
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-2 col-form-label">Content</label>
        <div class="col-sm-10">
          <textarea required class="form-control" id="exampleFormControlTextarea1" rows="5" v-model="msg.content"></textarea>
          <div class="invalid-feedback">
            Please input content.
          </div>
        </div>
      </div>
      <button class="btn btn-primary">Send</button>
    </form>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ComposeMessage",
  data() {
    return {
      msg: {
        subject: '',
        to: '',
        content: ''
      },
    }
  },
  computed: {
    ...mapState(['users', 'me']),

  },
  mounted() {
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.axios.post('/api/message/send/', this.msg).then((res) => {
        alert("Your message is sent");
        this.msg = {};
      }).catch(() => {
        alert('error')
      })
    },
  }
}
</script>

<style scoped lang="scss">

</style>

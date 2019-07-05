<template>
  <div class="login">
    <h2>Login</h2>
    <b-form @submit.prevent="handleSubmit" >
      <b-form-group
        id="input-username"
        label="Username"
        label-for="username">
        <b-form-input
          id="username"
          v-model="formData.username"
          required
          placeholder="Enter Username"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-password"
        label="Password"
        label-for="password">
        <b-form-input
          id="password"
          v-model="formData.password"
          required
          type="password"
          placeholder="Enter Password"
        ></b-form-input>
      </b-form-group>
      <b-button 
        class="btn btn-primary" 
        :disabled="status.loggingIn"
        type="submit" 
        variant="primary">
            {{ status.loggingIn ? 'LogginIn' : 'Login'}}
      </b-button>
      <b-link to="/register" class="btn btn-link">Register</b-link>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
// @ is an alias to /src


export default {
  name: 'login',
  components: {
  },
  data() {
      return {
          submitted: false,
          formData: {
              username: '',
              password: ''
          }
      }
  },
  computed: {
      ...mapState('account', ['status'])
  },
  created() {
      this.logout()
  },
  methods: {
      ...mapActions('account', ['login', 'logout']),
      handleSubmit (e) {
          this.submitted = true
          const { username, password } = this.formData
          if (username && password) {
              this.login({username, password})
          }
      }
  }
}
</script>

<template>
  <div class="Register">
    <h2>Register</h2>
    <b-form @submit.prevent="handleSubmit" >
      <b-form-group
        id="input-username"
        label="Username"
        label-for="username">
        <b-form-input
          name="username"
          v-model="formData.username"
          v-validate="'required'"
          placeholder="Enter Username"
        ></b-form-input>
        <div v-if="submitted && errors.has('username')" class="text-red">{{ errors.first('username') }}</div>
      </b-form-group>
      <b-form-group
        id="input-firstname"
        label="FirstName"
        label-for="firstName">
        <b-form-input
          name="firstName"
          v-model="formData.firstName"
          v-validate="'required'"
          placeholder="Enter FirstName"
        ></b-form-input>
        <div v-if="submitted && errors.has('firstName')" class="text-red">{{ errors.first('firstName') }}</div>
      </b-form-group>
      <b-form-group
        id="input-lastname"
        label="LastName"
        label-for="lastName">
        <b-form-input
          name="lastName"
          v-model="formData.lastName"
          v-validate="'required'"
          placeholder="Enter LastName"
        ></b-form-input>
        <div v-if="submitted && errors.has('lastName')" class="text-red">{{ errors.first('lastName') }}</div>
      </b-form-group>
      <b-form-group
        id="input-password"
        label="Password"
        label-for="password">
        <b-form-input
          name="password"
          v-model="formData.password"
          v-validate="{required: true, min: 6}"
          type="password"
          placeholder="Enter Password"
        ></b-form-input>
        <div v-if="submitted && errors.has('password')" class="text-red">{{ errors.first('password') }}</div>
      </b-form-group>
      <b-button 
        class="btn btn-primary" 
        :disabled="status.registering"
        type="submit" 
        variant="primary">
            {{ status.registering ? 'Registering' : 'Register'}}
      </b-button>
      <b-link to="/login" class="btn btn-link">Cancel</b-link>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// @ is an alias to /src


export default {
  name: 'register',
  components: {
  },
  data() {
      return {
          submitted: false,
          formData: {
              username: '',
              firstName: '',
              lastName: '',
              password: ''
          }
      }
  },
  computed: {
      ...mapState('account', ['status'])
  },
  methods: {
      ...mapActions('account', ['register']),
      handleSubmit (e) {
          this.submitted = true
          this.$validator.validate().then(valid => {
              if (valid) {
                  this.register(this.formData)
              }
          })
      }
  }
}
</script>
<style>
.text-red {
    color: red
}
</style>
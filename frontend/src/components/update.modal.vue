<template>
  <div>

    <b-modal
      id="update-modal"
      ref="update-modal"
      title="Update"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      @shown="initUser"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
        id="input-username"
        label="Username"
        label-for="username">
          <b-form-input
            name="username"
            v-model="user.username"
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
              v-model="user.firstName"
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
              v-model="user.lastName"
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
              v-model="user.password"
              v-validate="{required: true, min: 6}"
              type="password"
              placeholder="Enter Password"
            ></b-form-input>
            <div v-if="submitted && errors.has('password')" class="text-red">{{ errors.first('password') }}</div>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

  export default {
    data() {
      return {
        user: {
          id: '',
          username: '',
          firstName: '',
          lastName: '',
          password: ''
        },
        submitted: false,
      }
    },
    computed: {
      ...mapState({
        account: state => state.account
      })
    },
    methods: {
      ...mapActions({
        updateUser: 'account/update'
      }),
      resetModal() {
        this.submitted = false
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        this.submitted = true
          this.$validator.validate().then(valid => {
              if (valid) {
                  this.$refs['update-modal'].hide()
                  this.updateUser(this.user)
              }
          })
      },
      initUser() {
        console.log("updating:" + this.account.updating_user)
        if (this.account.updating_user !== null) {
          this.user.id = this.account.updating_user.id
          this.user.username = this.account.updating_user.username
          this.user.firstName = this.account.updating_user.firstName
          this.user.lastName = this.account.updating_user.lastName
        }
      }
    }
  }
</script>
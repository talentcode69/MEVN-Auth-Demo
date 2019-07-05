<template>
  <div class="home">
    <h1>Hi {{account.user.firstName}}!</h1>
    <p>You're logged in with Vue + Vuex & JWT!!</p>
    <h3>Users from secure api end point:</h3>
    <em v-if="users.loading">Loading users...</em>
    <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
    <b-table striped hover :items="users.items" v-if="users.items" :fields="table_fields">
			<template slot="Action" slot-scope="user">
        <span v-if="account.update_state.updating" class="text-primary"><em> Updating...</em></span>
        <span v-else><a @click="onUpdate(user.item)" class="text-primary">Update </a></span>
        <span v-if="user.deleting"><em> Deleting...</em></span>
        <span v-else-if="user.deleteError" class="text-danger"> ERROR: {{user.deleteError}}</span>
        <span v-else> <a @click="deleteUser(user.item.id)" class="text-danger">Delete</a></span>
      </template>
		</b-table>
    <updateModal />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import updateModal from '../components/update.modal'
// @ is an alias to /src


export default {
  name: 'home',
  data() {
    return {
      table_fields: ['username', 'firstName', 'lastName', 'Action'],
      update_user: {}
    }
  },
  components: { 
    updateModal
  },
  computed: {
    ...mapState({
      account: state => state.account,
      users: state => state.users.all
    })
  },
  created () {
    this.getAllUsers()
  },
  methods: {
    ...mapActions({
      getAllUsers: 'users/getAll',
      deleteUser: 'users/delete',
      openModal: 'account/openUpdateModal'
    }),
    onUpdate(user) {
      this.openModal(user)
      console.log(this.account.updating_user)
      this.$bvModal.show('update-modal')
    }
  }
}
</script>
<style>
a {
  cursor: pointer;
}
</style>
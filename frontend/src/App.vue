<template>
  <div id="app">
    <div class="jumbotron">
      <div class="container">
          <div class="row">
              <div class="col-sm-6 offset-sm-3">
                  <div v-if="alert.message" :class="'alert ' + alert.type">{{alert.message}}</div>
                  <router-view />
              </div>
          </div>
      </div>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  components: { },
  computed: {
    ...mapState({
            alert: state => state.alert
        })
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },
  watch: {
    $route (to, from) {
     // this.clearAlert()
    }
  }
}
</script>

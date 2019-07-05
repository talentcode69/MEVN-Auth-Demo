export default {
    loginRequest(state, user) {
        state.status = { loggingIn: true }
        state.user = user
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true }
        state.user = user
    },
    loginFailure(state) {
        state.status = {}
        state.user = null
    },
    logout(state) {
        state.status = {}
        state.user = null
    },
    registerRequest(state, user) {
        state.status = { registering: true }
    },
    registerSuccess(state, user) {
        state.status = {}
    },
    registerFailure(state, user) {
        state.status = {}
    },
    openUpdateModalRequest(state, user) {
        state.updating_user = user
    },
    updateRequest(state, user) {
        state.update_state = { updating: true }
    },
    updateSuccess(state, user) {
        state.update_state = {}
    },
    updateFailure(state, user) {
        state.update_state = {}
    },
}
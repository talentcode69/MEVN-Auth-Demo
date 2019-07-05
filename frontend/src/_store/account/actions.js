import { userService } from '../../_services'
import { router } from '../../_helpers'

export default {
    login({ dispatch, commit }, { username, password }) {
        commit('loginRequest', { username })

        userService.login(username, password)
            .then(
                user => {
                    commit('loginSuccess', user)
                    router.push('/')
                },
                error => {
                    commit('loginFailure', error)
                    dispatch('alert/error', error, { root: true })
                }
            )
    },
    logout({ commit }) {
        userService.logout()
        commit('logout')
    },
    register({ dispatch, commit }, user) {
        commit('registerRequest', user)

        userService.register(user)
            .then(
                user => {
                    commit('registerSuccess', user)
                    router.push('/login')
                    dispatch('alert/success', 'Registration successful', { root: true })
                },
                error => {
                    commit('registerFailure', error)
                    dispatch('alert/error', error, { root: true })
                }
            )
    },
    openUpdateModal({ commit }, user) {
        commit('openUpdateModalRequest', user)
    },
    update({ dispatch, commit }, user) {
        commit('updateRequest', user)
        userService.update(user)
            .then(
                user => {
                    commit('updateSuccess', user)
                    dispatch('alert/success', 'Update successful', { root: true })
                    dispatch('users/getAll', '', { root: true })
                },
                error => {
                    commit('updateFailure', error)
                    dispatch('alert/error', error, { root: true })
                }
            )
    }
}
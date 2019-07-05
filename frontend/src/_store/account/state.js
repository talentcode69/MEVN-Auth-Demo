const user = JSON.parse(localStorage.getItem('user'))
export default ( user 
    ? { status: { loggedIn: true }, user, updating_user: null, update_state: {} }
    : { status: {}, user: null, updating_user: null, update_state:{} }
)


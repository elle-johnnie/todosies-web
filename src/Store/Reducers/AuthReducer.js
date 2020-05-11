const intiState = {}

const authReducer = (state=intiState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('login fail');
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('sign out success');
            return state
        default:
            return state
    }
}

export default authReducer
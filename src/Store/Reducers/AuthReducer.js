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
            console.log('log out success');
            return state
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_FAILURE':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default authReducer
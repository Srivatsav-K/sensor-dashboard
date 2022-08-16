import { LOG_OUT, LOGIN_ERRORS, USER_LOADING_FALSE, USER_LOADING_TRUE, LOG_IN } from "../actions/userActions"

const userInitialState = {
    loginErrors: {},
    isLoggedIn: false,
    loading: false,
}

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case (USER_LOADING_TRUE): {
            return { ...state, loading: true }
        }
        case (USER_LOADING_FALSE): {
            return { ...state, loading: false }
        }
        case (LOG_IN): {
            return { ...state, isLoggedIn: true, loading: false, loginErrors: {} }
        }
        case (LOG_OUT): {
            return { ...state, isLoggedIn: false, loading: false }
        }
        case (LOGIN_ERRORS): {
            return { ...state, loginErrors: { ...action.payload }, loading: false }
        }
        default: {
            return { ...state }
        }
    }
}

export default userReducer
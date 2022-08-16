import axios from 'axios'
//--------------------------------------------------------------------------------------
export const USER_LOADING_TRUE = 'USER_LOADING_TRUE'
export const USER_LOADING_FALSE = 'USER_LOADING_FALSE'
export const LOGIN_ERRORS = 'LOGIN_ERROR'
export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
//--------------------------------------------------------------------------------------
const loadingTrue = () => {
    return { type: USER_LOADING_TRUE }
}
const loadingFalse = () => {
    return { type: USER_LOADING_FALSE }
}
const loginErrors = (err) => {
    return { type: LOGIN_ERRORS, payload: err }
}
export const userLoggedIn = () => {
    return { type: LOG_IN }
}
export const userLoggedOut = () => {
    return { type: LOG_OUT }
}
//--------------------------------------------------------------------------------------

export const startLogin = (formData, resetForm, props) => {
    return (
        (dispatch) => {
            dispatch(loadingTrue())
            axios.post(`http://localhost:3080/login`, formData)
                .then((response) => {
                    const result = response.data
                    if (result.errors) {
                        dispatch(loginErrors(result))
                    } else {
                        localStorage.setItem('token', result)
                        dispatch(userLoggedIn())
                        alert('login success')
                        props.history.push('/dashboard')
                        resetForm()
                    }
                })
                .catch((err) => {
                    alert(err.message)
                    dispatch(loadingFalse())
                })
        }
    )
}


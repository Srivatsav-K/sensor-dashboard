import axios from "axios"
//--------------------------------------------------------------------------
export const GET_TEMPERATURES = 'GET_TEMPERATURES'
//-----------------------------------------------------------------------------
const getTemperatures = (data) => {
    return { type: GET_TEMPERATURES, payload: data }
}
//-------------------------------------------------------------------------------
export const startGetTemperatures = () => {
    return (
        (dispatch) => {
            axios.get('http://localhost:3080/api/temperatures', {
                headers: {
                    'x-auth': localStorage.getItem('token')
                }
            })
                .then((response) => {
                    const result = response.data
                    dispatch(getTemperatures(result))
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
    )
}

import axios from "axios"
//--------------------------------------------------------------------------
export const GET_HUMIDITIES = 'GET_HUMIDITIES'
//-----------------------------------------------------------------------------
const getHumidities = (data) => {
    return { type: GET_HUMIDITIES, payload: data }
}
//-------------------------------------------------------------------------------
export const startGetHumidities = () => {
    return (
        (dispatch) => {
            axios.get('http://localhost:3080/api/humidities', {
                headers: {
                    'x-auth': localStorage.getItem('token')
                }
            })
                .then((response) => {
                    const result = response.data
                    dispatch(getHumidities(result))
                })
                .catch((err) => {
                    alert(err.message)
                })
        }
    )
}

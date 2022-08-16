import { GET_TEMPERATURES } from "../actions/temperatureActions"

const temperaturesInitialValue = {
    data: []
}

const temperatureReducer = (state = temperaturesInitialValue, action) => {
    switch (action.type) {
        case (GET_TEMPERATURES): {
            return { ...state, data: [...action.payload] }
        }
        default: {
            return { ...state }
        }
    }
}

export default temperatureReducer

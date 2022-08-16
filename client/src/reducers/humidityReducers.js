import { GET_HUMIDITIES } from "../actions/humidityActions"

const humiditiesInitialValue = {
    data: []
}

const humidityReducer = (state = humiditiesInitialValue, action) => {
    switch (action.type) {
        case (GET_HUMIDITIES): {
            return { ...state, data: [...action.payload] }
        }
        default: {
            return { ...state }
        }
    }
}

export default humidityReducer

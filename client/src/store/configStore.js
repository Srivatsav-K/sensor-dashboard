import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//----------------------------------------------------------------------------------------
import humidityReducer from '../reducers/humidityReducers'
import temperatureReducer from '../reducers/temperatureReducers'
import userReducer from '../reducers/userReducers'
//----------------------------------------------------------------------------------------

const configStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        temperatures: temperatureReducer,
        humidities: humidityReducer
    }), applyMiddleware(thunk))

    return store
}

export default configStore
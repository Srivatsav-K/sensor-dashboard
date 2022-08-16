import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
//----------------------------------------------------------------------------------------
import { startGetHumidities } from '../actions/humidityActions'
import { startGetTemperatures } from '../actions/temperatureActions'
//----------------------------------------------------------------------------------------
import HumidityChart from '../components/HumidityChart'
import TemperatureChart from '../components/TemperatureChart'
//----------------------------------------------------------------------------------------

const Dashboard = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetTemperatures())
        dispatch(startGetHumidities())
    }, [dispatch])

    return (
        <div>
            <h1>Dashboard</h1>

            <br />

            <TemperatureChart />

            <br /><br />

            <HumidityChart />
        </div>
    )
}

export default Dashboard
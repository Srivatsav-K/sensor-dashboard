import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format, parseISO } from 'date-fns'
//----------------------------------------------------------------------------------------
import { startGetHumidities } from '../actions/humidityActions'
//----------------------------------------------------------------------------------------
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
//----------------------------------------------------------------------------------------

const HumidityChart = () => {

    const humidities = useSelector((state) => state.humidities.data)

    const dispatch = useDispatch()

    const handleGetHumidities = () => {
        dispatch(startGetHumidities())
    }

    const data = useMemo(() => {
        return (
            humidities.map((ele) => {
                return [format(parseISO(ele.createdAt), 'hh:mm:ss'), ele.humidity] //[time,humidity]
            })
        )
    }, [humidities])

    const options = {
        title: {
            text: 'Humidity vs Time'
        },
        series: [{
            data: data
        }],
        yAxis: {
            title: {
                text: 'Humidity'
            }
        },
        xAxis: {
            title: {
                text: 'Time'
            }
        }
    }

    return (
        <div>
            <h1>HumidityChart</h1>

            <button onClick={handleGetHumidities}>
                GET LATEST HUMIDITIES
            </button>


            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default HumidityChart
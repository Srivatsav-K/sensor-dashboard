import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format, parseISO } from 'date-fns'
//----------------------------------------------------------------------------------------
import { startGetTemperatures } from '../actions/temperatureActions'
//----------------------------------------------------------------------------------------
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
//----------------------------------------------------------------------------------------

const TemperatureChart = () => {

    const temperatures = useSelector((state) => state.temperatures.data)

    const dispatch = useDispatch()

    const handleGetTemperatures = () => {
        dispatch(startGetTemperatures())
    }

    const data = useMemo(() => {
        return (
            temperatures.map((ele, i) => {
                return [format(parseISO(ele.createdAt), 'hh:mm:ss'), ele.temperature] // [time,temperature]
            })
        )
    }, [temperatures])

    const options = {
        title: {
            text: 'Temperature'
        },
        series: [{
            data: data
        }],
        yAxis: {
            title: {
                text: 'Temperature'
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
            <h1>TemperatureChart</h1>

            <button onClick={handleGetTemperatures}>
                GET LATEST TEMPERATURES
            </button>

            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
}

export default TemperatureChart
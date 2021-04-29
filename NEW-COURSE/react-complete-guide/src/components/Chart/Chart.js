import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {

    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues);

    return <div className='chart'>
        {props.dataPoints.map(e => {
            return (
                <ChartBar key={e.label} value={e.value} maxValue={totalMaximum} label={e.label}/>
            )
        })}
    </div>
}

export default Chart;

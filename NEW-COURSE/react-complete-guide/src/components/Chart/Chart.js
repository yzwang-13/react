import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    return <div className='chart'>
        {props.dataPoints.map(e => {
            <ChartBar key={e.label} value={e.value} maxValue={null} label={e.label}/>
        })}
    </div>
}

export default Chart;

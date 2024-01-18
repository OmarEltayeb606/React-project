import './combonnts-style/blockOfInfo.css';
import BlockOfInformationsDate from './BlockOfInformationsDate'
function BlockOfInfromations(props){
return(
<div className="box-info">
<div className='kind-date'>
<BlockOfInformationsDate date={props.date}/>
<h1 className="car-kind">{props.title}</h1>
</div>
<p className="amount">${props.amount}</p>
</div>);
}
export default BlockOfInfromations;
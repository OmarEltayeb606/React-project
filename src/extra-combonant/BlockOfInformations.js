import './combonnts-style/blockOfInfo.css';
import BlockOfInformationsDate from './BlockOfInformationsDate'
import React,{ useState } from 'react';
function BlockOfInfromations(props){

const [title,setTitle]= useState (props.title);

    const clickHander =()=> {
    setTitle('updeted');
    console.log(title);
    }
return(
<div className="box-info">
<div className='kind-date'>
<BlockOfInformationsDate date={props.date}/>
<h1 className="car-kind">{props.title}</h1>
</div>
<p className="amount">${props.amount}</p>
<button className='click' onClick={clickHander}>Click</button> 
</div>);
}
export default BlockOfInfromations;
import "./combonnts-style/New-Date.css"
import BlockOfInfromations from "./BlockOfInformations.js";
// import Card from "./card.js";
function Expenses (props){


    return(
        <div className="new-date">
<BlockOfInfromations
title={props.items[0].title}
amount={props.items[0].amount}
date={props.items[0].date}/>

<BlockOfInfromations
title={props.items[1].title}
amount={props.items[1].amount}
date={props.items[1].date}/>

<BlockOfInfromations 
title={props.items[2].title}
amount={props.items[2].amount}
date={props.items[2].date}/>

<BlockOfInfromations 
title={props.items[3].title}
amount={props.items[3].amount}
date={props.items[3].date}/>


        </div>
    )
}
export default Expenses
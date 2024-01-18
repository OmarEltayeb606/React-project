

import './App.css';
import BlockOfInfromations from "./extra-combonant/BlockOfInformations.js";
function App() {
  const expans=[
    {title:'sobarow', amount:100000000 , date: new Date(2017 , 10 ,11)},
    {title:'Kia', amount:100000 , date:new Date(2018 , 10 ,11)},
    {title:'marsedis', amount:1000000 ,date: new Date(2019 , 10 ,11)},
    {title:'hyondai', amount:700000 , date:new Date(2020 , 10 ,11)}]
  return(<div className='body'>

                        {/* simple way to make props */}
<BlockOfInfromations
title={expans[0].title}
amount={expans[0].amount}
date={expans[0].date}/>

<BlockOfInfromations
title={expans[1].title}
amount={expans[1].amount}
date={expans[1].date}/>

<BlockOfInfromations 
title={expans[2].title}
amount={expans[2].amount}
date={expans[2].date}/>

<BlockOfInfromations 
title={expans[3].title}
amount={expans[3].amount}
date={expans[3].date}/>

                        {/* Good way to make props */}


{/* <BlockOfInfromations exe ={expans[0]}/>
<BlockOfInfromations exe ={expans[1]}/>
<BlockOfInfromations exe ={expans[2]}/>
<BlockOfInfromations exe ={expans[3]}/> */}



</div>);
}

export default App;

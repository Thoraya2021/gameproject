import React from 'react'; 
import { useState } from "react";
//import Card from './component/cards' 
import './App.css';


function App() {
  
const [cards,setCards]=useState([


  {
    img:"https://www.lifewire.com/thmb/V8ZyYvb7w4pExMJsGQTDktKEtbw=/1024x768/filters:no_upscale():max_bytes(150000):strip_icc()/vladstudio_halloween_kitten_1024x768_signed-579be15f3df78c3276848237.jpg",
  
},
{
  img:"https://www.lifewire.com/thmb/V8ZyYvb7w4pExMJsGQTDktKEtbw=/1024x768/filters:no_upscale():max_bytes(150000):strip_icc()/vladstudio_halloween_kitten_1024x768_signed-579be15f3df78c3276848237.jpg",

},

{
  img:"https://www.lifewire.com/thmb/V8ZyYvb7w4pExMJsGQTDktKEtbw=/1024x768/filters:no_upscale():max_bytes(150000):strip_icc()/vladstudio_halloween_kitten_1024x768_signed-579be15f3df78c3276848237.jpg",

}
,
{
  img:"https://www.lifewire.com/thmb/V8ZyYvb7w4pExMJsGQTDktKEtbw=/1024x768/filters:no_upscale():max_bytes(150000):strip_icc()/vladstudio_halloween_kitten_1024x768_signed-579be15f3df78c3276848237.jpg",

}
,

{
  img:"https://www.lifewire.com/thmb/V8ZyYvb7w4pExMJsGQTDktKEtbw=/1024x768/filters:no_upscale():max_bytes(150000):strip_icc()/vladstudio_halloween_kitten_1024x768_signed-579be15f3df78c3276848237.jpg",

}
,

{
  img:"https://www.lifewire.com/thmb/V8ZyYvb7w4pExMJsGQTDktKEtbw=/1024x768/filters:no_upscale():max_bytes(150000):strip_icc()/vladstudio_halloween_kitten_1024x768_signed-579be15f3df78c3276848237.jpg",

}
,
{
  img:"https://www.lifewire.com/thmb/V8ZyYvb7w4pExMJsGQTDktKEtbw=/1024x768/filters:no_upscale():max_bytes(150000):strip_icc()/vladstudio_halloween_kitten_1024x768_signed-579be15f3df78c3276848237.jpg",

},

{
  img:"https://www.lifewire.com/thmb/V8ZyYvb7w4pExMJsGQTDktKEtbw=/1024x768/filters:no_upscale():max_bytes(150000):strip_icc()/vladstudio_halloween_kitten_1024x768_signed-579be15f3df78c3276848237.jpg",

},

])
const [reverse,setReve]=useState(0)

//this function for images whene us reverse.
const whenreve=()=>{
const whenreve=[...cards,...cards]
.sort(()=>Math.random() - 0.5)
.map((img)=> ({...img,id:Math.random()}))


setCards(whenreve)
setReve(0)
}



console.log(cards);

return (<>
 <h1> Halloween Game </h1> 
     <div className="cards">
  
      
      
        
         {cards.map( (item) =>{
          return <img className="imgs" src={item.img} on /> 
        })}
        
        <button className="easy">Easy Level</button>
        <button>Medium Level </button>
        <button>High Level</button>
    </div>
    
  </>);
}

export default App;

import React from 'react'; 
import { useState } from "react";
//import Card from './component/cards' 
import './App.css';


function App() {
  
  
const [cards,setCards]=useState([


{
  img:"https://th.bing.com/th/id/R.6434510bbe4e6a19eb0a49a2d87b3ae8?rik=3QNssC%2f0Kvkkhg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-VS7hAaHjfnY%2fUmyZhbDLi2I%2fAAAAAAAAGys%2fvIRpe7OSOc4%2fs1600%2fAnimated%2bHalloween%2bWallpapers%2b5.gif&ehk=JFBhcUrKw7Omg4FwK5aSkxNohWvOWvT%2f69rjnn2SLCY%3d&risl=&pid=ImgRaw&r=0",

}
,
{
  img:"https://th.bing.com/th/id/R.6434510bbe4e6a19eb0a49a2d87b3ae8?rik=3QNssC%2f0Kvkkhg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-VS7hAaHjfnY%2fUmyZhbDLi2I%2fAAAAAAAAGys%2fvIRpe7OSOc4%2fs1600%2fAnimated%2bHalloween%2bWallpapers%2b5.gif&ehk=JFBhcUrKw7Omg4FwK5aSkxNohWvOWvT%2f69rjnn2SLCY%3d&risl=&pid=ImgRaw&r=0"
}
,

{
  img:"https://th.bing.com/th/id/R.6434510bbe4e6a19eb0a49a2d87b3ae8?rik=3QNssC%2f0Kvkkhg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-VS7hAaHjfnY%2fUmyZhbDLi2I%2fAAAAAAAAGys%2fvIRpe7OSOc4%2fs1600%2fAnimated%2bHalloween%2bWallpapers%2b5.gif&ehk=JFBhcUrKw7Omg4FwK5aSkxNohWvOWvT%2f69rjnn2SLCY%3d&risl=&pid=ImgRaw&r=0",

}
,

{
  img:"https://th.bing.com/th/id/R.6434510bbe4e6a19eb0a49a2d87b3ae8?rik=3QNssC%2f0Kvkkhg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-VS7hAaHjfnY%2fUmyZhbDLi2I%2fAAAAAAAAGys%2fvIRpe7OSOc4%2fs1600%2fAnimated%2bHalloween%2bWallpapers%2b5.gif&ehk=JFBhcUrKw7Omg4FwK5aSkxNohWvOWvT%2f69rjnn2SLCY%3d&risl=&pid=ImgRaw&r=0",

}
,

{
  img:"https://th.bing.com/th/id/R.6434510bbe4e6a19eb0a49a2d87b3ae8?rik=3QNssC%2f0Kvkkhg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-VS7hAaHjfnY%2fUmyZhbDLi2I%2fAAAAAAAAGys%2fvIRpe7OSOc4%2fs1600%2fAnimated%2bHalloween%2bWallpapers%2b5.gif&ehk=JFBhcUrKw7Omg4FwK5aSkxNohWvOWvT%2f69rjnn2SLCY%3d&risl=&pid=ImgRaw&r=0",

}
,
{
  img:"https://th.bing.com/th/id/R.6434510bbe4e6a19eb0a49a2d87b3ae8?rik=3QNssC%2f0Kvkkhg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-VS7hAaHjfnY%2fUmyZhbDLi2I%2fAAAAAAAAGys%2fvIRpe7OSOc4%2fs1600%2fAnimated%2bHalloween%2bWallpapers%2b5.gif&ehk=JFBhcUrKw7Omg4FwK5aSkxNohWvOWvT%2f69rjnn2SLCY%3d&risl=&pid=ImgRaw&r=0"
}
,

{
  img:"https://th.bing.com/th/id/R.6434510bbe4e6a19eb0a49a2d87b3ae8?rik=3QNssC%2f0Kvkkhg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-VS7hAaHjfnY%2fUmyZhbDLi2I%2fAAAAAAAAGys%2fvIRpe7OSOc4%2fs1600%2fAnimated%2bHalloween%2bWallpapers%2b5.gif&ehk=JFBhcUrKw7Omg4FwK5aSkxNohWvOWvT%2f69rjnn2SLCY%3d&risl=&pid=ImgRaw&r=0",

}
,

{
  img:"https://th.bing.com/th/id/R.6434510bbe4e6a19eb0a49a2d87b3ae8?rik=3QNssC%2f0Kvkkhg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-VS7hAaHjfnY%2fUmyZhbDLi2I%2fAAAAAAAAGys%2fvIRpe7OSOc4%2fs1600%2fAnimated%2bHalloween%2bWallpapers%2b5.gif&ehk=JFBhcUrKw7Omg4FwK5aSkxNohWvOWvT%2f69rjnn2SLCY%3d&risl=&pid=ImgRaw&r=0",

}
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

return (   < div className="main">
 
     <div className="cards">       
         {cards.map( (item) =>{
          return <img className="imgs" src={item.img} on /> 
        })}
        </div>
        <div className="btn">
        <button>Start Again </button>
        <button>Next Level</button>
        </div>
    
  </div>);
}

export default App;

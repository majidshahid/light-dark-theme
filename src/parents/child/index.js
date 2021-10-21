import {useContext} from "react";
import Theme from ".././../context/index";
import { useState } from "react";
import  "./style.css"
// import {useEffect} from "react"
function Child (){
    const theme = useContext(Theme);
   const[color,setcolor]=useState("dark");

// useEffect(()=>{
//     switch (color){
//         case "dark":
//             setcolor("light");
//             case "light":
//              setcolor("dark"); 
//     }
// },[color])
    return(
        <div className={color}>
            <h1>Child</h1>
            <h1>{theme.name}</h1>
            <button onClick={()=>theme.setname("SHAHID WAZIR")}>update</button>
            <button onClick={()=>color?"dark":setcolor("light")}>dark/light</button>
        </div>
    )
}
export default Child;

import { useState } from "react";
import Parents from "./parents";
import Theme from "./context/index";
function App() {
  const[name,setname]=useState("Ghous")
  return (
    <div>
      <Theme.Provider value={{name:name,setname:setname}}>
    <Parents/>
    </Theme.Provider>
 
 
    </div>
  );
}

export default App;

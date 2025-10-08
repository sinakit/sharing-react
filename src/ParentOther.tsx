import { useEffect, useState } from "react";
import { useParentState } from "./states/useParent";

const ParentOther = () => {
    const {globalCounter, setGlobalCounter} = useParentState();
const [fullName, setFullName] = useState<string>("ABC");
const increaseCounter = () => {
    setGlobalCounter(globalCounter + 1);
}


  return (
    <div>
        <h2>Parent Other Component</h2>
        <h3>Parent Other Counter: {globalCounter}</h3>
        <button onClick={()=>{setFullName("Cheav Ratana")}}>Change to Cheav Ratana</button>
        <button onClick={increaseCounter}>Increase Counter Parent Other</button>
        {/* <Child fullName='Cheav A'  />
        <Child fullName='Cheav B' /> */}
        </div>
    )
}


export default ParentOther;
import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={() => setCounter(counter + 1)}> Increase Counter</button>
      <p>Counter on parent: {counter}</p>
      <Child counter={counter} callBackCounter={(num: number)=>{
        setCounter(num)
      }}/>
      {/* <Child counter={counter} /> */}
    </div>
  );
};

export default Parent;
// what is callback function
// callback function is a function that is
// passed as an argument to another function and is executed after some operation has been completed.

import Child from "./Child";
import { useParentState } from "./states/useParent";

const Parent = () => {
  const { globalCounter, setGlobalCounter } = useParentState();
  const increaseCounter = () => {
    setGlobalCounter(globalCounter + 1);
  };
  const decreaseCounter = (count: number) => {
    setGlobalCounter(count);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <h3>Parent Counter: {globalCounter}</h3>
      <button onClick={increaseCounter}>Increase Counter</button>
      <Child
        fullName="Cheav Roth"
        counter={globalCounter}
        onIncreaseCounter={() => {
          decreaseCounter(globalCounter + 1);
        }}
      />
    </div>
  );
};

export default Parent;
// what is callback function
// callback function is a function that is
// passed as an argument to another function and is executed after some operation has been completed.

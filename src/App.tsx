import './App.css'
import Parent from './Parent'

function App() {

  return (
    <>
     <Parent />
    </>
     
  )
}
export default App
// Props:
// - Pass data from parent to child
// - Read-only in child
// - Props change triggers re-render (only if parent re-renders)

// State:
// - Managed within component
// - Can be updated using setState
// - State change triggers re-render of the component

// callback function is a function that is
// passed as an argument to another function 
// and is executed after some operation has been completed.
// Example: In a parent component, 
// you might have a function that updates state. 
// You can pass this function as a prop to a child component. 
// When an event occurs in the child (like a button click), 
// it can call the passed function to update the parent's state.
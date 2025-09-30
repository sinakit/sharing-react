import Child from "./Child"

const Parent = () => {
  return (
    <div>
        <h2>Parent Component</h2>
        <Child fullName='Cheav Roth' />
        <Child fullName='Cheav A' />
        <Child fullName='Cheav B' />
        </div>
    )
}


export default Parent
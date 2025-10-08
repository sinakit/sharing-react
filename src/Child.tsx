
interface IProps {
    fullName: string,
    counter?: number,
    onIncreaseCounter?: () => void
}

const Child = (prop:IProps) => {
    const {fullName, counter, onIncreaseCounter} = prop;
  return (
    <div>
        <h3>Child Component</h3>
        <h3>First Child: {fullName}</h3>
        <h3>Child counter:{counter}</h3>
        <button onClick={onIncreaseCounter}>Increase Counter from Child</button>
        {/* <SecondChild /> */}
        </div>
    )
}
export default Child;
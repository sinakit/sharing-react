
interface IProps {
    counter?: number,
    callBackCounter: (num: number) => void
}

const Child = (props:IProps) => {

  return (
    <div>
        <h3>Child Component</h3>
        <h3>Child counter:{props.counter}</h3>
        <button onClick={() => {
            props.callBackCounter(props.counter ? props.counter + 1 : 1)
        }}> Increase Counter Child</button>
        {/* <SecondChild /> */}
        </div>
    )
}
export default Child;
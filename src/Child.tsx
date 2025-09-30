import SecondChild from "./SecondChild";

interface IProps {
    fullName: string
}

const Child = (prop:IProps) => {
    const {fullName} = prop;
  return (
    <div>
        <h3>Child Component</h3>
        <h3>First Child: {fullName}</h3>
        <SecondChild />
        </div>
    )
}
export default Child;
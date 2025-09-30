export interface IHeaderProps {
    name: string;
    age: number;
}

export const Header = (params:IHeaderProps) => {
    return <>
        <h1>Header Component</h1>
        <h2>Name: {params.name}</h2>
        <h2>Age: {params.age}</h2>
    </>
}
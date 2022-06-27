type TagProps = {
    key:string
    value :string,
}

const Tag = ({ value,key}:TagProps) => {
    return (
        <a href={`#`} key={ key } className={`font-mono text-lime-500 underline`}>{ value }</a>
    )
}

export default Tag
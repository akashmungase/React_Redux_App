function PassFunctionInProps(Props) {
    return (
        <div>
            <h4>Pass Function In Props Component</h4>
            <button onClick={Props.data}>Get Function</button>
        </div>
    )
}

export default PassFunctionInProps; 
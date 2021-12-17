
const  StopwatchDigit =({value, label})=>{

    return(
        <div className={"stopwatch-number"}>
            <b>{ value }</b>
            <span>{label}</span>
        </div>
    )
}
export default StopwatchDigit
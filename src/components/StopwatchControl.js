
const StopwatchControl = ({img, action, alt}) => {
    return(
        <button onClick={action}><img src={img} alt={alt}/></button>
    )
}


export default StopwatchControl
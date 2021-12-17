import React, {useState} from "react";
import {interval} from "rxjs";
import start from "./icons/start.svg";
import stop from "./icons/stop.svg";
import reset from "./icons/reset.svg";
import wait from "./icons/wait.svg";



const Stopwatch = () => {
    const [sec, setSec] = useState(0);
    const [timer, setTimer] = useState();
    const [buttonStatus, setButtonStatus] = useState(true);
    const timerSecond$ = interval(1000);


    const startAction = () => {
        setTimer(timerSecond$.subscribe((val) => setSec((state) => state + 1000)));
        setButtonStatus(false);
    }
    const stopAction = () => {
        timer.unsubscribe();
        setSec(0);
        setTimer(null);
        setButtonStatus(true);
    }
    const resetAction =() =>{
        setSec(0);
    }
    const waitAction = () => {
        timer.unsubscribe();
        setTimer(null);
        setButtonStatus(true)
    }
    return(
        <div className={"stopwatch-container"}>
            <div className={"stopwatch-digits"}>
                <div className={"stopwatch-number"}>
                    <b>
                        {
                        new Date (sec).toISOString().substr(11,2)
                        }
                    </b>
                    <span>hr</span>
                </div>
                <div  className={"stopwatch-number"}>
                    <b>
                        {
                            new Date (sec).toISOString().substr(14,2)
                        }
                    </b>
                    <span>min</span>
                </div>
                <div className={"stopwatch-number"}>
                    <b>
                        {
                            new Date (sec).toISOString().substr(17,2)
                        }
                    </b>
                    <span>sec</span>
                </div>
            </div>
            <div className={"stopwatch-controls"}>
                {
                    timer ? <button onClick={stopAction}><img src={stop} alt="stop"/></button> : <button onClick={startAction}><img
                        src={start} alt="start"/></button>
                }
                <button
                    disabled={buttonStatus}
                    onDoubleClick = {waitAction}>
                    <img src={wait} alt="wait"/>
                </button>
                <button onClick={resetAction}>
                    <img src={reset} alt="reset"/>
                </button>
            </div>

        </div>
    )
}
export default Stopwatch
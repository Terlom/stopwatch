import React, {useState} from "react";
import {interval} from "rxjs";
import start from "./icons/start.svg";
import stop from "./icons/stop.svg";
import reset from "./icons/reset.svg";
import wait from "./icons/wait.svg";
import StopwatchDigit from "./components/StopwatchDigit";
import StopwatchControl from "./components/StopwatchControl";



const Stopwatch = () => {
    const [sec, setSec] = useState(0);
    const [timer, setTimer] = useState();
    const [dbcFirstActionTime, setDbcFirstActionTime] = useState();
    const timerSecond$ = interval(1000);

    const startAction = () => {
        setTimer(timerSecond$.subscribe((val) => setSec((state) => state + 1000)));
    }
    const stopAction = () => {
        timer.unsubscribe();
        setSec(0);
        setTimer(null);
    }
    const resetAction =() =>{
        setSec(0);
    }
    const waitAction = () => {
        if(!timer)  return false;
        timer.unsubscribe();
        setTimer(null);
    }
    const doubleclick =() => {
        const time = Date.now();
        setDbcFirstActionTime(time);
        if(time - dbcFirstActionTime <= 300){
            waitAction();
        }
    }


    return(
        <div className={"stopwatch-container"}>
            <div className={"stopwatch-digits"}>
                <StopwatchDigit
                value={new Date(sec).toISOString().substr(11, 2)}
                label={"hr"}
                />
                <StopwatchDigit
                    value={new Date(sec).toISOString().substr(14, 2)}
                    label={"min"}
                />
                <StopwatchDigit
                    value={new Date(sec).toISOString().substr(17, 2)}
                    label={"sec"}
                />
            </div>
            <div className={"stopwatch-controls"}>
                {
                    timer
                        ? <StopwatchControl
                                img={stop}
                                action={stopAction}
                                alt={"stop"}
                            />
                        : <StopwatchControl
                            img={start}
                            action={startAction}
                            alt={"start"}
                            />
                }
                <StopwatchControl
                    img={wait} action={doubleclick}
                    alt={"wait"}
                />
                <StopwatchControl
                    img={reset}
                    action={resetAction}
                    alt={"reset"}
                />
            </div>
        </div>
    )
}
export default Stopwatch
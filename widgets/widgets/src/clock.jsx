import React, { useState, useEffect } from 'react';

function Clock(){

    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState(date.getHours());
    const [minute, setMinute] = useState(date.getMinutes());
    const [second, setSecond] = useState(date.getSeconds());

    useEffect(() => {
        setTimeout(()=>{
            incrementTime()
        }, 1000)
    })

    function incrementTime(){
        
        if(second+1 === 60){
            if(minute+1 === 60){
                if(hour+1 === 24){
                    setHour(0);
                } else{
                    setHour(hour+1)
                }
                setMinute(0);
            } else{
                setMinute(minute+1);
            }
            setSecond(0);
        } else{
            setSecond(second+1);
        }
    }

    return(
        <div>
            <h1> Clock </h1>
            <>Time: {hour} : {minute} : {second} PDT</>
        </div>
    )
}

export default Clock;
import React, { useState, useEffect } from "react";

const Timer = ({ startTime, endTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = endTime - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(( diff % (1000 * 60 * 60 * 24) )/ (1000*60*60) );
      const minutes = Math.floor( (diff % (1000 * 60 * 60 * 24)) / (1000*60) );
      const seconds = Math.floor((diff % (1000 * 60 ))/1000 );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  return (
    <>
      <div className="footerNav">
                    <div className="footerContenTextNav">
                        <p>Lorem ipsum dolor sit 
                            amet, consetetur</p>
                    </div>
                    <div className="footerContenTimeNav">
                        <div className="blockTime">
                            <span>{timeLeft.days}</span>
                            <span className="blockSpan">days</span>
                        </div>
                        <hr className="divider"/>
                        <div className="blockTime">
                            <span> {timeLeft.hours}</span>
                            <span className="blockSpan">Hour</span>
                        </div>
                        <hr className="divider"/>
                        <div className="blockTime">
                            <span> {timeLeft.minutes}</span>
                            <span className="blockSpan">Minutes</span>
                        </div>
                        <hr className="divider" />
                        <div className="blockTime">
                            <span> {timeLeft.seconds}</span>
                            <span className="blockSpan">Seconds</span>
                        </div>
                    </div>
                </div>
    
    </>

  );
};

export default Timer;
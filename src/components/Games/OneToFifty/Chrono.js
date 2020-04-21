import React, {
    useState,
    useEffect
} from 'react';

const Chrono = () => {
    const [startTime, setStartTime] = useState(0);
    const [currentTimeMs, setCurrentTimeMs] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTimeMs(new Date());
        }, 100);
        setStartTime(new Date());
        return () => clearInterval(interval);
    }, []);

    function convertMS(milliseconds) {
        let m, s, ms;
        ms = '' + milliseconds % 1000;
        s = Math.floor(milliseconds / 1000);
        m = '' + Math.floor(s / 60);
        s = '' + s % 60;

        return `${ m.padStart(2, '0')}:${s.padStart(2, '0')}:${ms.padStart(3, '0')}`;
    }

    return ( 
        <div className="col-12 col-md-6">
            <div className="row justifyCenter">
                <p> {
                `Tiempo : ${convertMS(currentTimeMs-startTime)}`
                } </p>
            </div>          
        </div>
    );
};

export default Chrono;

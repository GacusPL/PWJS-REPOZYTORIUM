import React, { useRef } from 'react';

function ClickCounter() {
    const clickCount = useRef(0);
    const handleClick = () => {
        clickCount.current++;
        console.log("Kliknięć:", clickCount.current);
    };

    return <button onClick={handleClick}>Kliknij mnie</button>;
}

export default ClickCounter;

import React, { useState } from "react"
import styles from './Counter.modules.scss';

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    


    return (
        <div>
            {counter}
            <button className={styles.button} onClick={() => setCounter(counter + 1)} style={{width: '120px', height: '20px', border: '2px solid #000'}}>
                increment
            </button>
        </div>
    )
}
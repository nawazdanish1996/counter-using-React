import React, { useState } from "react";
import "../components/Counter.css";

const Counter = (props) => {

    const [count, setCount] = useState(0);

    return(
        <div className="main-div">
            <h1>{props.title}</h1>
            <h2>{count}</h2><br />

            <button
            onClick={
                function inc(){
                    if(count < 10){
                        setCount(count + 1)
                    }
                }
            }
            >
            Increment
            </button>

            <button
            onClick={
                function inc(){
                    if(count > 0){
                        setCount(count - 1)
                    }
                }
            }
            >
            Decrement
            </button>

            <button
            onClick={
                function res(){
                    setCount(count - count)
                }
            }
            >
            Reset
            </button>

            <div className="para">
                <p>Increment: Highest order is 10</p>
                <p>Decrement: below 0 will not be decrement like -1</p>
                <p>Reset: After click on reset button will be reset the value</p>
                <h3>Nawaz Danish</h3>
            </div>
        </div>
    )
}


export default Counter;
import React from "react"


export default function Counter () {
    const [currentCount, setCurrentCount] = React.useState(0)

    function increaseCount(){
        setCurrentCount(prevCount => prevCount+1)
    }
    
    function decreaseCount(){
        setCurrentCount(prevCount => prevCount-1)
    }

    return(
        <div className="counter">
            <div className="plus-button" onClick={increaseCount}>Plus</div>
            <div className="current-count">{currentCount}</div>
            <div className="minus-button" onClick={decreaseCount}>Minus</div>
        </div>
        
    )
}
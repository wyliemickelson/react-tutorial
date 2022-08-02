import React, { useState, useEffect } from "react";

const CountBtn = ( {increment} ) => {
  const [currentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(currentCount + increment);
  }

  useEffect(() => {
    console.log('hello');
  }, [currentCount])

  return (
    <div>
      <button onClick={handleClick}>+{increment}</button>
      <p>{currentCount}</p>
    </div>

  )
}

export default CountBtn;
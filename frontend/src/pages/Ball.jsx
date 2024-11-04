import React, { useState, useEffect } from "react";

function Ball() {
  const [isBall, setIsBall] = useState(true); // Track if we are in "ball" or "card" state
  const [bounceCount, setBounceCount] = useState(0);

  const handleBounce = () => {
    // Increment bounce count on each click
    setBounceCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (bounceCount === 2) {
      // After 2 bounces, switch to the card
      setIsBall(false);
      setBounceCount(0); // Reset bounce count
    }
  }, [bounceCount]);

  return (
    <div className="app">
      <div className="sidebar">
        <button className="bounce-btn" onClick={handleBounce}>
          🌐
        </button>
      </div>
      <div className="content">
        <div className="animation-container">
          {isBall ? (
            <div className="ball" onAnimationIteration={handleBounce}></div>
          ) : (
            <div className="card">I'm a card!</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Ball;

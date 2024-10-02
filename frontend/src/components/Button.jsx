import React from "react";

function Button({ onClick, children, style }) {
  return (
    <button onClick={onClick} className={style}>
      {children}
    </button>
  );
}

export default Button;

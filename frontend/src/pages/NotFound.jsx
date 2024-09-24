import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="">oopsie ..... page not found</div>
      <Link to="/">lets go home, i will lead the way</Link>
    </>
  );
};

export default NotFound;

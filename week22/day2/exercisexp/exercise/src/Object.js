import React from "react";
import user from "./index.js";

function Name() {
  return (
    <div>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
    </div>
  );
}

export default Name;
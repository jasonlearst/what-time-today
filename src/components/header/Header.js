import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="titlediv">
        <a href={process.env.PUBLIC_URL + "/"}>
          <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="What Time Today" height={40} />
        </a>
      </div>
    </div>
  );
}

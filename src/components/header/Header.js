import React from "react";

import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="titlediv">
        <a href="/">
          <img src="/logo.svg" alt="" height={40} />
        </a>
        <h1 className="header-title">What Time Today</h1>
      </div>
    </div>
  );
}

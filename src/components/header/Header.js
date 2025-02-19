import React from "react";

import "./Header.css";

export default function Header({ handleSignClick }) {

  return (
    <div className="header">
      <div className="titlediv">
        <a href="/">
          <img src="/logo.svg" alt="" height={40} />
        </a>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";

export default function About() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/get/whattime.today/copy");
    xhr.responseType = "json";
    xhr.onload = function () {
      setCounter(this.response.value);
    };
    xhr.send();
  }, []);

  return (
    <div className="not-homepage">
      <div className="aboutpage">
        <p>
          Made by{" "}
          <a
            style={{ color: "black", textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/jonathanmcai"
          >
            Jonathan Cai
          </a>
          .  Updated By{" "}
          <a
            style={{ color: "black", textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jasonlearst"
          >
            Jason Learst
          </a>
        </p>
        <p>Stop sending me Calendly links. </p>
        <p>
          For feedback, questions, and inquiries, open an issue{" "}
          <a
            style={{ color: "black", textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jasonlearst/what-time-today/issues"
          >
            here
          </a>
          .
        </p>
        <p>February 2025.</p>
        <p>Used {counter} times so far.</p>
      </div>
    </div>
  );
}

import React from "react";

export default function Privacy() {
  return (
    <div className="not-homepage">
      <div className="privacy-page">
        <h2>User Data</h2>
        <p>Security and user data privacy is taken seriously.</p>
        <p>
          This application runs entirely client-side in your browser. No data
          is collected, stored, or transmitted to any server.
        </p>
        <p>
          The availabilities that you select on the calendar only persist for
          your browser session and are not stored anywhere.
        </p>

        <h2>Third Parties</h2>
        <p>
          Your data is not shared publicly or with any third party.
        </p>

        <h2>Other</h2>
        <p>
          This project is{" "}
          <a
            style={{ color: "black" }}
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jasonlearst/what-time-today"
          >
            open source
          </a>
          .
        </p>
        <p>
          If you have any questions or concerns, please open an issue on{" "}
          <a
            style={{ color: "black" }}
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jasonlearst/what-time-today/issues"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}

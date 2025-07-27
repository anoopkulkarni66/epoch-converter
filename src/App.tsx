import React, { useState } from "react";

// Helper functions
function epochToUTC(epoch: number) {
  return new Date(epoch * 1000).toUTCString();
}
function epochToLocal(epoch: number) {
  return new Date(epoch * 1000).toLocaleString();
}
function getBrowserTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export default function App() {
  const [epochInput, setEpochInput] = useState("");
  const [utcTime, setUtcTime] = useState("");
  const [localTime, setLocalTime] = useState("");
  const [browserTimezone, setBrowserTimezone] = useState(getBrowserTimezone());
  const [error, setError] = useState("");

  const handleConvert = () => {
    setError("");
    const epochNum = Number(epochInput);
    if (isNaN(epochNum) || epochNum < 0) {
      setError("Please enter a valid positive epoch time (seconds since Jan 1, 1970).");
      setUtcTime("");
      setLocalTime("");
      return;
    }
    setUtcTime(epochToUTC(epochNum));
    setLocalTime(epochToLocal(epochNum));
    setBrowserTimezone(getBrowserTimezone());
  };

  return (
    <div className="futuristic-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="futuristic-card">
        <h1>Epoch ➜ UTC & Local Time Converter</h1>
        <input
          type="number"
          placeholder="Enter epoch time (seconds)"
          value={epochInput}
          onChange={e => setEpochInput(e.target.value)}
          className="futuristic-input"
        />
        <button onClick={handleConvert} className="futuristic-btn">Convert</button>
        {error && <div className="futuristic-error">{error}</div>}
        {utcTime && (
          <div className="results">
            <div>
              <span className="label">UTC Time:</span>
              <span className="value">{utcTime}</span>
            </div>
            <div>
              <span className="label">Local Time ({browserTimezone}):</span>
              <span className="value">{localTime}</span>
            </div>
            <div>
              <span className="label">Browser Timezone:</span>
              <span className="value">{browserTimezone}</span>
            </div>
          </div>
        )}
      </div>
      <style>{`
        .futuristic-bg {
          background: radial-gradient(ellipse at center, #0f2027 0%, #2c5364 100%);
        }
        .futuristic-card {
          background: rgba(40, 44, 52, 0.95);
          border: 2px solid #12fff7;
          box-shadow: 0 0 40px #12fff7, 0 0 60px #0f2027;
          border-radius: 24px;
          padding: 40px 32px;
          color: #fff;
          width: 420px;
          font-family: 'Orbitron', 'Roboto Mono', monospace;
          text-align: center;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 24px;
          background: linear-gradient(90deg,#12fff7,#2c5364);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .futuristic-input {
          width: 100%;
          padding: 14px;
          margin-bottom: 18px;
          border: 1px solid #12fff7;
          border-radius: 8px;
          background: #222;
          color: #12fff7;
          font-size: 1.2rem;
          outline: none;
          transition: box-shadow 0.2s;
        }
        .futuristic-input:focus {
          box-shadow: 0 0 10px #12fff7;
        }
        .futuristic-btn {
          background: linear-gradient(90deg,#12fff7,#2c5364);
          color: #0f2027;
          border: none;
          border-radius: 8px;
          padding: 12px 32px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          margin-bottom: 18px;
          box-shadow: 0 0 15px #12fff7;
          transition: background 0.2s;
        }
        .futuristic-btn:hover {
          background: linear-gradient(90deg,#2c5364,#12fff7);
        }
        .futuristic-error {
          color: #ff0077;
          margin-top: 12px;
          font-size: 1.1rem;
        }
        .results {
          margin-top: 24px;
          text-align: left;
        }
        .label {
          font-weight: bold;
          color: #12fff7;
          text-shadow: 0 0 8px #12fff7;
        }
        .value {
          margin-left: 8px;
          font-family: 'Roboto Mono', monospace;
          color: #fff;
          background: #181d27;
          border-radius: 6px;
          padding: 4px 8px;
        }
      `}</style>
      {/* Orbitron font for a futuristic look */}
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Roboto+Mono:wght@500&display=swap" rel="stylesheet" />
    </div>
  );
}

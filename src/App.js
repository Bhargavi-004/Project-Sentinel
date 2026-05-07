import React, { useState, useEffect } from "react";
import "./App.css"; // This import links the styling below

const StatCard = ({ label, value, subtext }) => (
  <div className="card">
    <h3>{label}</h3>
    <div className="stat">{value}</div>
    <div className="subtext">{subtext}</div>
  </div>
);

export default function App() {
  const [logs, setLogs] = useState([]);
  const [metrics, setMetrics] = useState({ cpu: 0, traffic: "0.0 mbps" });

  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = new Date().toLocaleTimeString();
      const events = [
        "Scanning network nodes...",
        "Encryption handshake verified",
        "Data packet validated: Port 443",
        "CRITICAL: Unauthorized ping detected",
        "Updating research database..."
      ];
      
      const randomEvent = events[Math.floor(Math.random() * events.length)];
      const isAlert = randomEvent.includes("CRITICAL");

      setLogs(prev => [{ 
        id: Date.now(), 
        msg: `[${timestamp}] ${randomEvent}`, 
        isAlert 
      }, ...prev].slice(0, 8));
      
      setMetrics({
        cpu: Math.floor(Math.random() * 30) + 5,
        traffic: (Math.random() * 150).toFixed(1) + " mbps"
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sentinel-container">
      <header className="header">
        <div className="logo-section">
          <h1>PROJECT SENTINEL</h1>
          <span className="status-indicator">LIVE SYSTEM</span>
        </div>
        <p>Advanced Research & Web Monitoring Interface</p>
      </header>

      <div className="grid">
        <StatCard label="CPU UTILIZATION" value={`${metrics.cpu}%`} subtext="Core 0-7 Active" />
        <StatCard label="NETWORK INGRESS" value={metrics.traffic} subtext="Direct Feed" />
        <StatCard label="SECURITY PROTOCOL" value="v4.2" subtext="Standard AES" />
      </div>

      <section className="feed-container">
        <div className="feed-header">LIVE ANALYSIS STREAM</div>
        <div className="feed-body">
          {logs.map(log => (
            <div key={log.id} className={`log-line ${log.isAlert ? 'alert' : ''}`}>
              {log.msg}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

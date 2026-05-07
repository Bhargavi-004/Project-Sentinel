# Project Sentinel: Real-Time Monitoring Interface

## 📌 Project Overview
**Project Sentinel** is a high-performance web dashboard designed for real-time observability in research and lab environments. Built with **React.js**, this interface visualizes live data streams, allowing researchers to monitor system health and network logs through a clean, intuitive UI.

This project demonstrates the ability to handle asynchronous data, manage state in React, and implement automated log triage for anomaly detection.

## 🚀 Key Features
* **Live Data Orchestration:** Uses React Hooks (`useState`, `useEffect`) to manage a persistent data stream with sub-2-second update frequencies.
* **Automated Log Triage:** Implements conditional logic to scan incoming data for "CRITICAL" flags, automatically highlighting security events or system failures in red.
* **System Metrics Visualization:** Displays real-time calculations for CPU utilization and Network Ingress, simulating a direct feed from a research backend.
* **Research-Focused UI:** A high-contrast "Terminal Style" dark mode designed to reduce visual fatigue for researchers monitoring data over long durations.

## 🛠️ Technical Stack
* **Frontend:** React.js (Functional Components)
* **Styling:** CSS3 (Flexbox & Grid Architecture)
* **Environment:** Node.js v18.18.0

## 📖 Research Applications
This tool serves as a prototype for several research-based use cases:
1.  **Network Forensics:** Visualizing packet header data during live traffic analysis.
2.  **Lab Management:** Monitoring the resource load of long-running experimental scripts on university servers (e.g., Eustis).
3.  **Data Observability:** Bridging the gap between raw terminal logs and human-readable interfaces.

## 🔧 Installation & Setup
1. Clone the repo: `git clone https://github.com/Bhargavi-004/Project-Sentinel.git`
2. Install dependencies: `npm install`
3. Launch: `npm start`

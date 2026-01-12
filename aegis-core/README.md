# 🛡️ Aegis Protocol
> **Decentralized Disaster Relief Network** | *Aid at the Speed of Light*

![Aegis Dashboard Preview](public/preview.png)

## 🌌 Overview
Aegis Protocol is a **Zero-Knowledge, privacy-preserving disaster relief platform** built to eliminate fraud and leakage in humanitarian aid. By leveraging blockchain transparency and high-performance Layer 2 scaling, we ensure funds reach beneficiaries in seconds, not weeks.

**Status**: 🟢 MVP Live (Simulated Network) | **Event**: IIT KGP Blockchain Hackathon 2026

---

## 🏗️ Architecture & Stack
The system follows a modern, decentralized application (dApp) architecture designed for resilience and speed.

- **Frontend**: Next.js 14, React, Tailwind CSS v4, Framer Motion (Cyberpunk/Glassmorphism UI).
- **Simulation Engine**: `SimulationContext` (React Context) generating deterministic chaotic events (typhoons, aid drops) and processing transactions in real-time.
- **Smart Contracts (Mock)**: Solidity (Hardhat environment) structure for `AidToken` (ERC-20) and `IdentityVerifier` (ZK-Circuit stub).
- **Data Visualization**: Real-time geospatial heatmaps and transaction streams using framer-motion animations.

---

## ⚛️ The "Physics" of Aegis
Aegis runs on a custom **Entropy Engine** that simulates a live blockchain environment for the hackathon MVP.

1.  **Entropy Generation**: The system generates "Blocks" every 3 seconds, containing batched transactions.
2.  **Transaction flow**:
    - **Trigger**: UN DAO deploys $1M USDC.
    - **Propagation**: Smart Contract distributes credits to discrete geospatial nodes (Food Drops/Clinics).
    - **Settlement**: Beneficiaries "scan" QR codes (simulated), triggering an immediate simulated settlement.
3.  **Chaos Metrics**: Random variation is introduced in latency and "blocked" transaction attempts to simulate real-world network conditions.

---

## 📊 Aegis vs. Traditional NGOs

| Feature | 🐢 Traditional Aid | ⚡ Aegis Protocol |
| :--- | :--- | :--- |
| **Settlement Time** | 3-7 Days (Banks) | **< 10 Seconds** (L2 Chain) |
| **Overhead Cost** | 15-30% (Admin fees) | **< 0.1%** (Gas) |
| **Transparency** | Audited Yearly (Opaque) | **Real-time Public Ledger** |
| **Privacy** | Sensitive Data Exposed | **ZK-Proofs** (Identity Hidden) |
| **Access** | Requires Bank Account | **Any Feature Phone** (SMS/QR) |

---

## 💻 Project Structure
```bash
aegis-core/
├── src/
│   ├── app/
│   │   ├── (protected)/       # Secured Dashboard Routes
│   │   │   ├── dashboard/     # Command Center (Main View)
│   │   │   ├── admin/         # Governance & System Status
│   │   │   └── layout.tsx     # Sidebar Shell
│   │   ├── page.tsx           # 🌐 Landing Page (Parallax)
│   │   └── layout.tsx         # Root Layout
│   ├── components/
│   │   ├── ui/                # Glass-panel UI Kit (Cards, Buttons, Particles)
│   │   └── layout/            # Sidebar & Header
│   └── lib/
│       └── SimulationContext.tsx # 🧠 The Brain (Simulation Logic)
├── contracts/                 # Hardhat Smart Contracts (Backend)
└── public/                    # Static Assets
```

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/anugrahks19/iitkgpblockchainlink.git
    cd iitkgpblockchainlink/aegis-core
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

4.  **Launch Console**:
    - Open `http://localhost:3000` in your browser.
    - Click **"Launch Console"** to enter the immersive dashboard.

---

## 🎨 Visual Features (For Judges)
- **Parallax Landing**: Scroll down on the home page to see 3D-skewed feature cards and evolving data charts.
- **Particle Constellation**: The background features a canvas-based particle system representing independent nodes in the decentralized network.
- **Simulated Latency**: The "System Status" in the Admin panel real-time tracks simulating network health.
- **Geospatial Radar**: The dashboard map uses a scanning radar animation to visualize ZK-Proof verifications happening in specific regions.

---
*Built with 💙 by Team Nova for IIT KGP*

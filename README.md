# 🛡️ Aegis Protocol — Decentralized Disaster Relief Network

> **Decentralized, ZK-Privacy Enabled Disaster Relief Network** | *Aid at the Speed of Light*

Aegis Protocol is a **Zero-Knowledge, privacy-preserving disaster relief platform** built to eliminate fraud, reduce overhead, and eliminate leakage in humanitarian aid distribution. Built on high-performance Layer 2 scaling and decentralized identity registers, Aegis ensures funds reach verified beneficiaries in seconds, not weeks, with strict category-locking and receipt auditing.

**Status**: 🟢 MVP Live (Immersive Simulated L2 Network)
**Event**: IIT KGP Blockchain Hackathon 2026
**Team**: Team Nova

---

## 🌌 Core Features

Aegis Protocol introduces a paradigm shift in humanitarian aid delivery:

*   **⚡ Aid at the Speed of Light**: Instant L2 settlement, reducing delivery times from weeks to seconds.
*   **🔒 Zero-Knowledge Privacy**: Verify identity and eligibility cryptographically without exposing sensitive personal identifiable information (PII) on public ledgers.
*   **🌾 Category-Locked Credits (ERC-1155)**: Direct issuance of utility-based tokens (e.g., Food Credits, Medical Supplies) valid only at certified local vendors.
*   **🤖 AI-Powered Receipt Auditing**: Dynamic vendor terminal with receipt scanning that automatically verifies purchased goods (e.g., Rice, Flour, Oil) before releasing stablecoin payouts.
*   **🚨 Emergency Safeguards**: On-chain administration console featuring real-time circuit-breaking (Emergency Network Pause) and decentralized governance proposal tracking.
*   **💎 Premium Cyberpunk UI**: Sleek glassmorphism dashboards, real-time canvas-based particle constellations, scanning geospatial radar, and smooth interactive micro-animations.

---

## 📊 Aegis vs. Traditional NGOs

| Feature | 🐢 Traditional Aid | ⚡ Aegis Protocol |
| :--- | :--- | :--- |
| **Settlement Time** | 3 - 7 Days (Opaque banking routing) | **< 10 Seconds** (On-chain L2 settlement) |
| **Overhead Cost** | 15% - 30% (Intermediary & admin fees) | **< 0.1%** (Layer 2 gas cost minimization) |
| **Transparency** | Audited Yearly (Opaque & central) | **Real-Time Public Ledger** |
| **Privacy Protection**| Sensitive personal data exposed | **ZK-Proofs** (Anonymized identities) |
| **Access Requirements**| Bank Account, Physical ID | **Any Mobile Phone** (SMS / QR scan) |
| **Fraud Prevention** | Retrospective manual auditing | **Proactive cryptographic verification** |

---

## 🏗️ Architecture & Technical Stack

Aegis Protocol relies on a robust, multi-layer architecture designed for offline resilience, lightning-fast settlement, and maximum auditability.

```
                  ┌──────────────────────────────────────────────┐
                  │                 Landing Page                 │
                  │        (Parallax, Particle Starfield)        │
                  └──────────────────────┬───────────────────────┘
                                         │ Launch Console
                  ┌──────────────────────▼───────────────────────┐
                  │          Command Center & Dashboard          │
                  │   (Geospatial Radar & Live Block Stream)    │
                  └──────────┬───────────────┬───────────────┬───┘
                             │               │               │
      ┌──────────────────────▼───────┐ ┌─────▼───────────────▼┐ ┌────▼─────────────────────────┐
      │     Beneficiary Terminal     │ │   Merchant Terminal  │ │         Admin Terminal       │
      │   • Wallet & Balances        │ │ • Vendor QR Payment  │ │ • Emergency Pause Switch     │
      │   • QR Payment Scanner       │ │ • AI Receipt Auditor │ │ • Org Verification Queue     │
      │   • Multi-Token Redemption   │ │ • Stablecoin Cashout │ │ • Governance Proposals       │
      └──────────────────────────────┘ └──────────────────────┘ └──────────────────────────────┘
                                                  ▲
                                                  │ Trigger state changes
                  ┌───────────────────────────────┴──────────────────────────────────────────────┐
                  │                    React Simulation Context Engine                           │
                  │           (Drives real-time events, blocks, and network data)                │
                  └───────────────────────────────┬──────────────────────────────────────────────┘
                                                  │ Interacts with (Mocked)
                  ┌───────────────────────────────▼──────────────────────────────────────────────┐
                  │                    Smart Contract Layer (Hardhat)                            │
                  │   • OrganizationRegistry.sol: Authorized vendors list                        │
                  │   • ReliefToken.sol: Multi-token standard (ERC-1155) registry validation     │
                  └──────────────────────────────────────────────────────────────────────────────┘
```

### Technical Stack Components:

*   **Frontend Application**: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Radix UI.
*   **State & Simulation Engine**: React Context (`SimulationContext`) creating a real-time reactive L2 chain sandbox that emits transactions and generates block updates every 3 seconds.
*   **Smart Contracts**: Solidity 0.8.20 compiled and managed inside a robust Hardhat developer environment.
    *   [OrganizationRegistry.sol](file:///d:/GITHUB/iitkgp-blockchain/aegis-core/contracts/contracts/OrganizationRegistry.sol): Maintains verified relief groups, vendor metadata, and authorized merchant categories.
    *   [ReliefToken.sol](file:///d:/GITHUB/iitkgp-blockchain/aegis-core/contracts/contracts/ReliefToken.sol): Implements an ERC-1155 token standard specifying aid items (`FOOD = 1`, `MEDICAL = 2`, `SHELTER = 3`), overriding safe transfer hooks to validate vendor legitimacy dynamically on-chain.
*   **Icons & Assets**: Lucide React.
*   **Notifications**: Sonner toasts.

---

## 🎨 Premium Visual Elements & HUDs

To capture the futuristic and robust design ethos, Aegis Protocol incorporates advanced visual features designed to wow reviewers:
1.  **Parallax Interactive Hero**: Breathtaking scrolling dynamics with skewed feature grids and real-time custom SVG charts.
2.  **Particle Constellation Canvas**: A background canvas animation representing independent nodes interacting inside a peer-to-peer network.
3.  **Geospatial Radar Scanner**: Main console featuring a scanning radar animation that simulates real-time ZK verifications happening geographically in remote regions.
4.  **AI Receipt Inspection Terminals**: A simulated camera scanning framework executing OCR/Receipt analysis to confirm correct food purchases before triggering USDC release to bank rails.

---

## 🗂️ Project Directory Structure

```bash
iitkgp-blockchain/
├── .gitignore                    # 🛡️ Global repository ignore configurations (strictly configured)
├── README.md                     # 📖 Root documentation overview (this file)
└── aegis-core/                   # 🚀 Core application package
    ├── src/                      # Next.js 16 codebase
    │   ├── app/                  # Application router routes
    │   │   ├── (protected)/      # Secure console spaces
    │   │   │   ├── admin/        # Governance control room & pause switch
    │   │   │   ├── beneficiary/  # Beneficiary mobile layout & QR scanner
    │   │   │   ├── dashboard/    # Real-time Command Center with GIS map & stats
    │   │   │   ├── vendor/       # Merchant QR portal & AI receipt analyzer
    │   │   │   └── layout.tsx    # Protected sidebar template
    │   │   ├── globals.css       # Premium tailwind configuration & keyframe declarations
    │   │   ├── layout.tsx        # Global provider setups
    │   │   └── page.tsx          # 🌐 Breathtaking Parallax Landing Page
    │   ├── components/           # Reusable React UI component block
    │   │   ├── ui/               # Tailored UI blocks (Cards, Particles, Modals)
    │   │   └── layout/           # Sidebar navigation & HUD Header
    │   └── lib/                  # Simulation core utilities
    │       └── SimulationContext.tsx # 🧠 The Engine driving live L2 state logs
    ├── contracts/                # Smart Contract Sub-workspace
    │   ├── contracts/            # Solidity files
    │   │   ├── OrganizationRegistry.sol # Vendor registers
    │   │   └── ReliefToken.sol   # ERC-1155 Category lock
    │   ├── hardhat.config.ts     # Solidity compilations settings
    │   ├── package.json          # Sub-workspace metadata
    │   └── package-lock.json
    ├── package.json              # App dependencies config
    └── tsconfig.json             # TypeScript rules configuration
```

---

## 🚀 Setup & Execution Guide

Follow these steps to spin up the application stack locally:

### 1. Prerequisite Installations
Verify your environment runs:
*   Node.js (v18.0 or higher recommended)
*   Git

---

### 2. Quick-Start Setup

#### Clone & Enter the Project
```bash
git clone https://github.com/anugrahks19/iitkgpblockchainlink.git
cd iitkgpblockchainlink
```

#### Set Up Smart Contracts (Sub-workspace)
If you wish to view or compile the smart contracts:
```bash
cd aegis-core/contracts
npm install
npx hardhat compile
```

#### Set Up and Start Next.js App
Open another terminal (or navigate back to the app directory):
```bash
cd aegis-core
npm install
npm run dev
```

*   The frontend app will launch immediately at `http://localhost:3000`.
*   Click **"Launch Console"** to open the Command Center dashboard.

---

## 🔐 Security, Privacy & Safety Controls

In alignment with production-grade blockchain applications, Aegis Protocol guarantees:

1.  **Strict PII Avoidance**: No direct database storage of beneficiary phone numbers, full names, or physical addresses. All identities are encapsulated within an on-chain cryptographic address stub.
2.  **Category Locking Check**: The smart contracts (`ReliefToken.sol:safeTransferFrom`) check vendor legitimacy before allowing transfers to complete, preventing beneficiaries from using medical tokens to buy unrelated merchandise.
3.  **Zero Exposed Secrets**:
    *   The project does not contain any hardcoded API keys, private keys, or seed phrases.
    *   A comprehensive root-level `.gitignore` blocks files like `.env`, local hardhat outputs (`cache/`, `artifacts/`), build folders (`.next/`), and system junk files from ever getting pushed to public branches.

---

## 👥 Hackathon Context & Team

Built with 💙 by **Team Nova** for the **IIT KGP Blockchain Hackathon 2026**. Special thanks to the judges and mentors for guiding decentralized innovations!

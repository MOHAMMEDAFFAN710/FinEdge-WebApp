# 🪙 FinEdge – FinTech CRM Platform (UptoSkills Project)

### 🚀 Overview
**FinEdge** is a FinTech-based CRM and lead management platform developed under **UptoSkills**.  
The platform takes inspiration from Snov.io but focuses on the **FinTech ecosystem** — connecting startups, investors, and professionals through smart lead management, AI automation, and blockchain integration for transparency and trust.

---

### 🧠 Vision
Our goal is to create a unified digital space for FinTech entities to:
- Discover and connect with relevant investors, startups, and partners.
- Manage relationships, deals, and outreach efficiently.
- Use blockchain for verifiable financial data and AI for smart recommendations.

---

### 🏗️ Core Features
- **Lead Management (CRM):** Track startups, investors, and partnership deals.  
- **Email & Domain Search:** Verify and discover professional contacts.  
- **Blockchain Integration:** Store verified data on-chain for transparency.  
- **AI Recommendation Engine:** Provide smart suggestions for lead scoring and matches.  
- **Analytics Dashboard:** View real-time metrics and engagement insights.

---

### 💻 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js / Next.js, Tailwind CSS |
| **Backend** | Node.js / Express / NestJS |
| **Blockchain** | Solidity, Web3.js / Ethers.js, Hardhat |
| **Database** | PostgreSQL, MongoDB |
| **AI Microservice** | Python, FastAPI, Scikit-learn / TensorFlow |
| **Auth & Security** | JWT, Bcrypt, Helmet |
| **Dev Tools** | Docker, Postman, Swagger, GitHub Actions |

---

### ⚙️ Architecture Overview
Frontend (React)
↕
Backend API (Node.js / Express)
↕
Database (PostgreSQL + MongoDB)
↕
Blockchain Layer (Ethereum Testnet)
↕
AI Service (FastAPI Model API)

yaml
Copy code

---

### 🧩 Repository Structure
FinEdge-WebApp/
│
├── backend/ # Node.js backend APIs
│ ├── src/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ └── config/
│ └── package.json
│
├── frontend/ # React frontend (UI based on Figma designs)
│ ├── components/
│ ├── pages/
│ ├── assets/
│ └── package.json
│
├── blockchain/ # Smart contracts & blockchain scripts
│ ├── contracts/
│ ├── scripts/
│ ├── test/
│ └── hardhat.config.js
│
├── ai-service/ # Python-based AI microservice
│ ├── app.py
│ ├── models/
│ └── requirements.txt
│
├── docs/ # Documentation, API specs, reports
│
└── README.md

yaml
Copy code

---

### 👥 Team Structure

| Team | Tech | Role |
|------|------|------|
| **Frontend** | React / Next.js | UI Development, API Integration |
| **Backend** | Node.js / Express | API Design, Database, Auth |
| **Blockchain** | Solidity | Smart Contract & On-chain Data |
| **AI** | Python (FastAPI) | Model Training & Inference APIs |
| **Database** | SQL & MongoDB | Data Modeling & Query Optimization |
| **Documentation & QA** | Notion / Postman | Docs, Testing, Validation |

---

### 🔗 Integration Flow
1. **Each team maintains its own subfolder** (`frontend/`, `backend/`, etc.).
2. **All code merges into `main` branch** through **pull requests (PRs)** after review.
3. **Common API contracts** (data formats, endpoints) are documented under `/docs/api-specs.md`.
4. **Backend acts as central hub** connecting all services (frontend, blockchain, AI).
5. **UptoSkills DevOps team handles deployment** — your focus is on functionality & integration.

---

### 🧠 How the Teams Work Together

| Task | Owner | Output |
|------|--------|--------|
| Smart contract deployment | Blockchain Team | ABI + Contract Address |
| API endpoints | Backend Team | RESTful APIs |
| Frontend UI integration | Frontend Team | React pages + Axios calls |
| AI recommendation service | AI Team | FastAPI endpoint |
| Database schema | SQL & MongoDB Team | Migrations & models |
| Documentation | Research & QA | Setup & usage guides |

---

### 🛠️ Setup Instructions (for local development)

```bash
# Clone the repo
git clone https://github.com/uptoskills/FinEdge-WebApp.git

# Navigate into backend
cd backend
npm install
npm run dev

# In another terminal, start frontend
cd frontend
npm install
npm start

# Blockchain (run Hardhat node)
cd blockchain
npm install
npx hardhat node

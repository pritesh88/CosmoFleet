# 🚀 CosmoFleet

**CosmoFleet** is a cloud-native microservices platform designed to demonstrate real-world DevOps practices using **Node.js, Docker, and Kubernetes**.  
It focuses on automated deployments, scalability, observability, and resilience — just like production systems.

---

## 🌌 Project Vision

Modern applications run as distributed microservices and require:
- automated CI/CD pipelines  
- container orchestration  
- self-healing and auto-scaling  
- real-time monitoring and alerts  

CosmoFleet simulates a **production-grade cloud platform** in a cost-effective, cloud-agnostic way.

---

## 🛠️ Tech Stack

- **Backend:** Node.js (Express)
- **Containerization:** Docker
- **Orchestration:** Kubernetes (Minikube)
- **CI/CD:** GitHub Actions
- **Monitoring:** Prometheus & Grafana
- **Ingress:** NGINX
- **Security:** Image scanning & best practices

---

## 🧱 Microservices Architecture

```text
CosmoFleet
├── services
│   ├── auth-service        # Authentication & health checks
│   ├── user-service        # User-related operations
│   ├── order-service       # Order management
│   └── api-gateway         # Single entry point for all services
│
├── k8s                     # Kubernetes manifests
│
└── README.md

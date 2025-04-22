# 🚀 Cluster Pulse

A minimal HTTP server that logs incoming requests, built with Node.js and containerized with Docker. Designed for simple deployment in a Kubernetes environment.

---

## 📁 Project Structure

```
.
├── server.js              # Node.js HTTP server
├── Dockerfile             # Docker build configuration
├── k8.deployments.yaml    # Kubernetes Deployment spec
└── command.sh             # Build, run, tag, and push commands
```

---

## 🌐 Server Overview

**server.js**

- A basic HTTP server created using Node’s built-in `http` module.
- Logs every request to the console with timestamp, method, and URL.
- Responds with `"Hello, World!"` on every request.

### Example Output:
```
[2025-04-21T12:00:00.000Z] GET /
Server running at http://0.0.0.0:8080/
```

---

## 🐳 Docker Setup

**Dockerfile**

- Uses the `arm64v8/node:16` base image.
- Installs dependencies from `package.json`.
- Copies project files and exposes port `8080`.

### Build & Run (from `command.sh`):

```bash
# Build Docker image
docker build -t cluster-pulse .

# Run locally
docker run -p 8080:8080 cluster-pulse

# Tag and push to Docker Hub
docker tag cluster-pulse masumosman/cluster-pulse:latest
docker push masumosman/cluster-pulse
```

> Make sure you're logged into Docker Hub as `masumosman` before pushing.

---

## ☸️ Kubernetes Deployment

**k8.deployments.yaml**

Deploys the `cluster-pulse` container as a replicated service in Kubernetes.

### Key Specs:
- **Replicas**: 2
- **Container Port**: 8080
- **Image**: `masumosman/cluster-pulse:latest`

### Deploy Command:
```bash
kubectl apply -f k8.deployments.yaml
```

> Ensure your Kubernetes context is set and cluster is ready before applying the deployment.

---

## 📦 Requirements

- [Node.js 16 (ARM64)](https://hub.docker.com/_/node)
- Docker
- Kubernetes (optional for deployment)
- `package.json` and `package-lock.json` in project root

---

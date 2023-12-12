# Transaction API Pilot

This repository serves as an experiment for practicing node typescript with mongodb, run via docker.

## Getting Started

Create a .env

```text
# MONGO DB ADMIN PORTAL
MONGO_DB_ADMIN_URL="mongodb://admin:admin@mongodb:27017/"
MONGO_DB_ADMIN_PORT="8081"
MONGO_DB_ADMIN_USERNAME="admin"
MONGO_DB_ADMIN_PASSWORD="admin"

# MONGO DB
MONGO_DB_PORT="27017"
MONGO_DB_USERNAME="root"
MONGO_DB_PASSWORD="admin"
MONGO_DB_CONNECTION_STRING="mongodb://root:admin@mongodb:27017/"

# MONGO DB COLLECTIONS
TRANSACTIONS_COLLECTION_NAME="transactions"
BUDGETS_COLLECTION_NAME="budgets"
USERS_COLLECTION_NAME="users"

# NODE SERVER
NODE_SERVER_PORT="3000"
```

## TODOs

- study nosql db practices/design
- node api running in typescript
- extract passwords from docker compose
- api running via docker
- mongodb created and running via docker
- api and mongodb connected
- scripts for creating table and default records
- scripts for inserting records
- transactions endpoint
- budget endpoint
- unit tests

# Transaction API Pilot

This repository serves as an experiment for practicing node typescript with mongodb, run via docker.

## Getting Started

Create a .env

```text
# MONGO DB ADMIN PORTAL
MONGO_DB_ADMIN_URL="mongodb://admin:admin@localhost:27017/"
MONGO_DB_ADMIN_PORT="8081"
MONGO_DB_ADMIN_USERNAME="admin"
MONGO_DB_ADMIN_PASSWORD="admin"

# MONGO DB
MONGO_DB_NAME="budget-tracker"
MONGO_DB_PORT="27017"
MONGO_DB_USERNAME="root"
MONGO_DB_PASSWORD="admin"
MONGO_DB_CONNECTION_STRING="mongodb://root:admin@mongo:27017/"

# MONGO DB COLLECTIONS
TRANSACTIONS_COLLECTION_NAME="transactions"
BUDGETS_COLLECTION_NAME="budgets"
USERS_COLLECTION_NAME="users"

# NODE SERVER
NODE_SERVER_PORT="3000"
```

Note: the 'mongo' in the connection string refers to the docker container name. If that container name is changed,  
update the connection string to reflect that.

Note: The admin portal must be '@localhost', since it resides in the same docker container to be able to communicate.

Lastly, run `docker compose up -d`. If making changes, `docker compose up -d --build --remove-orphans`.

## TODOs

- study nosql db practices/design
- scripts for inserting records
- unit tests
- postman/thunderclient collections
- document/comment

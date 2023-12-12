import * as mongoDB from "mongodb"
import * as dotenv from "dotenv"

export const collections: { 
    transactions?: mongoDB.Collection,
    users?: mongoDB.Collection,
    budgets?: mongoDB.Collection
} = {}

export async function connectToDatabase () {
    dotenv.config();
    const connectionString: string = process.env.MONGO_DB_CONNECTION_STRING || 'mongodb://root:admin@mongodb:27017/'
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(connectionString)

    await client.connect()

    const db: mongoDB.Db = client.db(process.env.DB_NAME)

    const transactionsCollectionName: string = process.env.TRANSACTIONS_COLLECTION_NAME || 'transactions'
    const transactionsCollection: mongoDB.Collection = db.collection(transactionsCollectionName)

    const usersCollectionName: string = process.env.USERS_COLLECTION_NAME || 'users'
    const usersCollection: mongoDB.Collection = db.collection(usersCollectionName)

    const budgetsCollectionName: string = process.env.BUDGETS_COLLECTION_NAME || 'budgets'
    const budgetsCollection: mongoDB.Collection = db.collection(budgetsCollectionName)

    collections.transactions = transactionsCollection;
    collections.users = usersCollection;
    collections.budgets = budgetsCollection;

    console.log(`Successfully connected to database: ${db.databaseName}`)
}
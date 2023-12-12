import express from 'express'
import transactionResource from './resources/transaction'
import budgetResource from './resources/budget'
import userResource from './resources/user'

const router = express.Router()

/** transaction routes */
router.post('/transactions', transactionResource.createTransaction)
router.get('/transactions', transactionResource.getTransactions)
router.get('/transactions/:transactionId', transactionResource.getTransaction)

/** budget routes */
router.post('/budgets', budgetResource.createBudget)
router.get('/budgets', budgetResource.getBudgets)
router.get('/budgets/:budgetId', budgetResource.getBudget)

/** user routes */
router.post('/users', userResource.createUser)
router.get('/users', userResource.getUsers)
router.get('/users/:userId', userResource.getUser)

export = router
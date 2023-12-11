/** source/resources/transaction.ts */
import { Request, Response, NextFunction } from 'express'
import { collections } from "../services/database.service"
import Transaction from "../models/transaction"
import { formatError } from '../services/error.service'

const getTransactions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const transactions = (await collections.transactions?.find({}).toArray()) as unknown as Transaction[];

        return res.status(200).json({
            message: transactions
        })
    } catch (error) {
        let message = formatError(error)
        return res.status(500).json({ message: message })
    }
}

const getTransaction = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const transactionId = req.params.transactionId
        const transaction = (await collections.transactions?.findOne({ id: transactionId })) as unknown as Transaction;

        return res.status(200).json({
            message: transaction
        })
    } catch (error) {
        let message = formatError(error)
        return res.status(500).json({ message: message })
    }
}

const createTransaction = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const transaction = req.body as Transaction
        const result = await collections.transactions?.insertOne(transaction)

        return result ? res.status(201).json({
            message: result
        }) : res.status(400).json({
            message: "Error creating transaction."
        })
    } catch (error) {
        let message = formatError(error)
        return res.status(500).json({ message: message })
    }
}

export default {
    getTransaction,
    getTransactions,
    createTransaction
}
/** source/resources/transaction.ts */
import { Request, Response, NextFunction } from 'express'
import { collections } from "../services/database.service"
import Budget from "../models/budget"
import { formatError } from '../services/error.service'

const getBudgets = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const budgets = (await collections.budgets?.find({}).toArray()) as unknown as Budget[];

        return res.status(200).json({
            message: budgets
        })
    } catch (error) {
        let message = formatError(error)
        return res.status(500).json({ message: message })
    }
}

const getBudget = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const budgetId = req.params.budgetId
        const budget = (await collections.budgets?.findOne({ id: budgetId })) as unknown as Budget;

        return res.status(200).json({
            message: budget
        })
    } catch (error) {
        let message = formatError(error)
        return res.status(500).json({ message: message })
    }
}

export default { getBudget, getBudgets }
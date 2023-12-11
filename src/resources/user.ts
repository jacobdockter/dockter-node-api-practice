/** source/resources/transaction.ts */
import { Request, Response, NextFunction } from 'express'
import { collections } from "../services/database.service"
import User from "../models/user"
import { formatError } from '../services/error.service'

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = (await collections.users?.find({}).toArray()) as unknown as User[];

        return res.status(200).json({
            message: users
        })
    } catch (error) {
        let message = formatError(error)
        return res.status(500).json({ message: message })
    }
}

const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.userId
        const user = (await collections.users?.findOne({ id: userId })) as unknown as User;

        return res.status(200).json({
            message: user
        })
    } catch (error) {
        let message = formatError(error)
        return res.status(500).json({ message: message })
    }
}

export default { getUser, getUsers }
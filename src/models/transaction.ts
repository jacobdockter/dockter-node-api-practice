import { ObjectId } from "mongodb";

export default class Transaction {
    constructor(
        public budgetId: Number,
        public userId: Number,
        public amount: Number,
        public source: String,
        public date: Number, // timestamp
        public id?: ObjectId
    ) {}
}
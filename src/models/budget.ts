import { ObjectId } from "mongodb";

export default class Budget {
    constructor(
        public name: string,
        public id?: ObjectId
    ) {}
}
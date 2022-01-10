import * as mongoose from "mongoose";

export default async function mongo_connector() {
    return await mongoose.connect('mongodb:book_api:azerty1596@cluster0.kgirz.mongodb.net/Cluster0?retryWrites=true&w=majority');
}
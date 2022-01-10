import * as mongoose from "mongoose";

export default async function mongo_connector() {
    return await mongoose.connect('');
}
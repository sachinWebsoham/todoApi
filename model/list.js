import mongoose from "mongoose";
const schema = new mongoose.Schema({
    list:String,
    status:String
})
export const LIST = mongoose.model('data_list',schema);
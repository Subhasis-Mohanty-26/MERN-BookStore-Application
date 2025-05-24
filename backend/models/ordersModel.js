import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    }
}, {timestamps: true});
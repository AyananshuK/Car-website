import mongoose from "mongoose";

const FormDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

export const FormData = mongoose.model('Car_Website_Form_Data', FormDataSchema);
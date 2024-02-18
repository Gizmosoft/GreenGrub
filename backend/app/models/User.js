import mongoose from "mongoose";
import UserModel from "./User.js";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},
{
    versionKey: false
})

const userSchema = mongoose.model('User', UserSchema);

export default userSchema;
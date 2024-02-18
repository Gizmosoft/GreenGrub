import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    accountCreationDate: {
        type: Date,
        required: true
    }
},
{
    versionKey: false
})

const userSchema = mongoose.model('User', UserSchema);

export default userSchema;
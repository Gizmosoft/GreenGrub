import mongoose from "mongoose";
// import UserModel from "./User.js";

const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    measurment: {
        type: String,
        required: true
    },
},
{
    versionKey: false
})

const ingredientSchema = mongoose.model('Ingredient', IngredientSchema);

export default ingredientSchema;
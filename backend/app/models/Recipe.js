import mongoose from "mongoose";
// import UserModel from "./User.js";

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    steps: {
        type: String,
        required: true
    },
    // owner: { type: Schema.Types.ObjectId, ref: "User" },
    // ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient" }],
    emission: {
        type: Number,
        required: false
    }
},
{
    versionKey: false
})

const recipeModel = mongoose.model('Recipe', RecipeSchema);

export default recipeModel;
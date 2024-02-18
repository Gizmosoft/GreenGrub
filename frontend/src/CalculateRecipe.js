// src/DynamicForm.js
import React, { useState } from "react";
import "./index.css";
import {
  TextField,
  MenuItem,
  Button,
  Grid,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import services from "./services";

const recipe = require("../src/assets/recipe.jpg");

const DynamicForm = () => {
  const [fields, setFields] = useState([
    { name: "", quantity: "", measurement: "" },
  ]);
  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [carbonFootprint, setCarbonFootprint] = useState(null); // Initially set to null

  const handleAddField = () => {
    setFields([...fields, { name: "", quantity: "", measurement: "" }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newFields = [...fields];
    if (name == "quantity" && value >= 0) {
      newFields[index][name] = value;
      setFields(newFields);
    }
    if (name != "quantity") {
      newFields[index][name] = value;
      setFields(newFields);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", {
      "name":recipeName,
      "steps":recipeDescription,
      ingredients: fields,
    });
    let recipeData =  {
      "name":recipeName,
      "steps":recipeDescription,
      ingredients: fields,
    }

    services.createRecipe(recipeData).then((res)=>{
      console.log(res);
      services.calculateIndex(res).then((result)=>{
        console.log(result);
      })
    })

    
    const calculatedCarbonFootprint = calculateCarbonFootprint(fields);
    setCarbonFootprint(calculatedCarbonFootprint);
    // Reset form fields after submission
    setRecipeName("");
    setRecipeDescription("");

    setFields([{ name: "", quantity: "", measurement: "" }]);
  };
  // Function to calculate carbon footprint based on ingredients and quantities

  const calculateCarbonFootprint = (ingredients) => {
    // Calculate carbon footprint logic goes here
    // For example, sum up the carbon footprint of each ingredient
    return 100; // Placeholder value for demonstration
  };
  return (
    <div className="recipe-container">
      <div className="recipe-img-container">
        <img src={recipe} />
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <Grid container spacing={2} style={{ padding: "10px" }}>
          <Grid item xs={12}>
            <TextField
              label="Recipe Name"
              value={recipeName}
              onChange={(e) => setRecipeName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              placeholder="Recipe Description"
              value={recipeDescription}
              onChange={(e) => setRecipeDescription(e.target.value)}
              style={{
                width: "100%",
                height: "200px",
                resize: "vertical",
                marginTop: "10px",
                padding: "10px",
              }}
            />
          </Grid>
        </Grid>
        {fields.map((field, index) => (
          <Grid container spacing={2} key={index} style={{ padding: "10px" }}>
            <Grid item xs={4}>
              <TextField
                name="name"
                label="Ingredient Name"
                value={field.name}
                onChange={(e) => handleChange(index, e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="quantity"
                label="Quantity"
                type="number"
                value={field.quantity}
                onChange={(e) => handleChange(index, e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                name="measurement"
                label="Measurement"
                select
                value={field.measurement}
                onChange={(e) => handleChange(index, e)}
                fullWidth
              >
                <MenuItem value="table-spoon">table spoon</MenuItem>
                <MenuItem value="tea-spoon">tea spoon</MenuItem>
                <MenuItem value="cup">cup</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <Button
                color="secondary"
                onClick={() => handleRemoveField(index)}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        ))}
        <div className="recipe-bottom-container">
          <Button color="primary" onClick={handleAddField}>
            Add
          </Button>
          <Button variant="contained" type="submit" color="primary">
            Submit
          </Button>

          <Typography variant="h6">Carbon Footprint: {carbonFootprint !== null
              ? `${carbonFootprint} kg CO2e`
              : "Calculating..."}</Typography>

        </div>
      </form>
    </div>
  );
};

export default DynamicForm;

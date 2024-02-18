import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {

  return (
    <Link to={`/recipe/${recipe._id}`} style={{ textDecoration: "none" }}>
      <Card style={{transition:"none", height:"300px",position:"relative"}} className="recipe-card" variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {recipe.name}
          </Typography>
          <Typography color="textSecondary">Ingredients:</Typography>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient[0].name}: {ingredient[0].quantity}{" "}
                {ingredient[0].measurement}
              </li>
            ))}
          </ul>
          <Grid  container style={{ justifyContent: "space-between",position:"absolute",bottom:"30px" }}>
            <Grid  item>
              <Typography variant="body2" color="textSecondary">
                Author: {/* Author's name */}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary">
                Emission: {recipe.emission}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RecipeCard;

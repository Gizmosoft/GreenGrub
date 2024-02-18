import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import services from "../services";

const RecipeCard = ({ recipe }) => {
  const [user, setuser] = useState({ firstName: "Loading..." })
  useEffect(() => {
    console.log(recipe.owner)
    services.getUserById(recipe.owner).then((response)=>{
     setuser(response.data);
     console.log(response.data);
    })
  }, [])
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
          <Grid  container style={{ justifyContent: "space-around",position:"absolute",bottom:"30px" }}>
            <Grid  item>
              <Typography variant="body2" color="textSecondary">
                Author: {user.firstName}
              </Typography>
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

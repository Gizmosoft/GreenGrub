import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import services from '../services';
import { Grid, Paper, Typography } from '@mui/material';
import LoadingComponent from '../Components/Loading';
const recipeImg = require("../assets/recipe.jpg");
const RecipeDetailsPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipeData = await services.getRecipeById(id);
        setRecipe(recipeData);
        console.log(recipe);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div style={{position:"fixed",height:"100vh",width:"100%"}}>
      <LoadingComponent/>
    </div>;
  }

  return (
    <div >
      <Typography style={{padding:"5vw"}} variant="h3" gutterBottom>
        {recipe.name}
      </Typography>
      <div className='recipe-details-page-container'>
        <div style={{flex:"1"}}>
          
            <Typography variant="h5">Ingredients:</Typography>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient[0].name}: {ingredient[0].quantity} {ingredient[0].measurement}
                </li>
              ))}
            </ul>
            <Typography variant="h5"> Steps:</Typography><span> {recipe.steps}</span>
            <Typography variant="h5"> Emission: </Typography><span>{recipe.emission}</span>
          
        </div>
        <div style={{flex:"1"}}>
          <img src={recipeImg} alt={recipe.name}  />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;

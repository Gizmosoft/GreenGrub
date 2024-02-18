import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import RecipeCard from '../Components/RecipeCard'; // Assuming RecipeCard component is in a separate file
import services from '../services';
import LoadingComponent from '../Components/Loading';

const Explore = () => {
  const [recipes, setrecipes] = useState(null);
  useEffect(() => {
    services.getRecipes().then((res)=>{
      console.log(res);
      setrecipes(res);
    })
  }, [])

  if (!recipes) {
    return <div style={{position:"fixed",height:"100vh",width:"100%"}}>
      <LoadingComponent/>
    </div>;
  }
  return (
    <Grid container spacing={2} style={{ paddingTop: '10vh' }}>
      {recipes.map((recipe, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Explore;

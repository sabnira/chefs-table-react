import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import OurRecipes from './components/OurRecipes';
import Recipes from './components/Recipes';
import Sidebar from './components/Sidebar';

const App = () => {

  const [recipeQueue, setRecipeQueue] = useState([])

  const addRecipeToQueue = recipe => {

    const isExist = recipeQueue.find(
      previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
    )

    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe])
    } else {
      alert('Recipe already exists in the queue.')
    }
  }
  

  return (
    <div className='w-10/12 mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>

      <section className='flex flex-col md:flex-row gap-6'>
        <Recipes addRecipeToQueue=
        {addRecipeToQueue}></Recipes> 

        <Sidebar recipeQueue={recipeQueue}></Sidebar>
      </section>

    </div>
  );
};

export default App;
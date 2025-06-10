import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import OurRecipes from './components/OurRecipes';
import Recipes from './components/Recipes';
import Sidebar from './components/Sidebar';

const App = () => {

  const [recipeQueue, setRecipeQueue] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)


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

  const handleRemove = id => {

    //find which recipe to remove
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)

    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue);

    //set to prepare table
    setPreparedRecipe([...preparedRecipe, deletedRecipe])
  }

  const calculateTimeAndCalories = (time, calorie) =>{
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calorie)
  }
  

  return (
    <div className='w-10/12 mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>

      <section className='flex flex-col md:flex-row gap-6'>
        <Recipes addRecipeToQueue=
        {addRecipeToQueue}></Recipes> 

        <Sidebar 
        handleRemove={handleRemove} 
        recipeQueue={recipeQueue} 
        preparedRecipe={preparedRecipe}
        calculateTimeAndCalories={calculateTimeAndCalories}
        totalTime={totalTime}
        totalCalories={totalCalories}>
        </Sidebar>

      </section>

    </div>
  );
};

export default App;
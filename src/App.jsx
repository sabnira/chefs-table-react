import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import OurRecipes from './components/OurRecipes';
import Recipes from './components/Recipes';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>

      <section className='flex flex-col md:flex-row gap-6'>
        <Recipes></Recipes> 
        <Sidebar></Sidebar>
      </section>

    </div>
  );
};

export default App;
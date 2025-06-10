import React, { useEffect, useState } from 'react';

const Recipes = ({addRecipeToQueue}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=> {
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])


    return (
        <div className='md:w-2/3'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>

            {recipes.map(recipe => (

            <div key={recipe.recipe_id} className="card bg-base-100 border-1">
                <figure className='px-8 pt-6'>
                    <img className='w-full md:h-52 object-cover rounded-xl'
                    src={recipe.recipe_image}
                    alt="recipes image" />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl text-gray-800 font-semibold">
                        {recipe.recipe_name}
                    </h2>

                    <h2 className="text-gray-600">{recipe.short_description}</h2>

                    <h3 className='text-lg text-gray-800 font-medium'>Ingredients: {recipe.ingredients.length}</h3>

                    <ul className='ml-8'>
                        {recipe.ingredients.map((item, index) => (
                            <li className='list-disc text-gray-600' key={index}>{item}</li>
                        ))}
                    </ul>

                    <p></p>
                    
                    <div className='flex gap-4 mt-4'>
                        <div className='flex items-center'>
                            <i className="fa-regular fa-clock mr-2 text-2xl"></i>
                            <p>{recipe.preparing_time} minute.</p>
                        </div>

                        <div className='flex items-center'>
                            <i className="fa-solid fa-fire-flame-curved mr-2 text-2xl"></i>
                            <p>{recipe.calories} calorie.</p>
                        </div>
                    </div>

                   

                    <div onClick={()=>addRecipeToQueue(recipe)} className="card-actions ">
                    <button className="btn btn-success rounded-full px-8  text-gray-800 mt-6 font-medium">Want To Cook</button>
                    </div>
                </div>
            </div>

            ))
            }
    
        </div>
        </div>
    );
};

export default Recipes;
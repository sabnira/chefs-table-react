import React from 'react';

const Sidebar = ({recipeQueue, handleRemove, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories}) => {
    return (
        <div className='md:w-1/3 border-1 rounded-xl text-gray-600 p-2 bg-base-100'>

            {/* want to cook table */}
            <div className="overflow-x-auto">

            <h2 className='pb-2 border-b-1 mx-auto font-semibold text-2xl text-gray-800 text-center'>Want To Cook: {recipeQueue.length}</h2>
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {recipeQueue.map((recipe, index) => (
                         <tr className="hover:bg-base-300" key={index}>

                            <th className='px-0'>{index + 1}</th>

                            <td>{recipe.recipe_name}</td>

                            <td>{recipe.preparing_time}</td>

                            <td>{recipe.calories}</td>

                            <td className='px-0'> <button onClick={()=> {

                                 handleRemove(recipe.recipe_id)
                                 calculateTimeAndCalories(recipe.preparing_time, recipe.calories)

                            }} className="btn btn-success rounded-full px-2 py-1 md:px-4 md:py-2  text-gray-800">Preparing</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
            </div>



            {/* currently cooking table */}
             <div className="overflow-x-auto mt-8">

            <h2 className='pb-2 border-b-1 mx-auto font-semibold text-2xl text-gray-800 text-center'>Currently Cooking: {preparedRecipe.length}</h2>
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                    {preparedRecipe.map((recipe, index) => (
                         <tr className="hover:bg-base-300" key={index}>

                            <th className='px-0'>{index + 1}</th>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time}</td>
                            <td>{recipe.calories}</td>
                        </tr>
                    ))}

                    <tr className='border-none'>
                        <th className='px-0'></th>
                        <td></td>
                        <td>Total Time = {totalTime}</td>
                        <td>Total Calories = {totalCalories}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            
        </div>
    );
};

export default Sidebar;
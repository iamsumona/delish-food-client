import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../../Components/Loader/LoadingSpinner';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const ViewRecipes = () => {
    const navigation = useNavigation()
    console.log(navigation.state)
    if (navigation.state === 'loading') {
        return <LoadingSpinner />
    }
    const recipeDetailsWithChef = useLoaderData()
    console.log(typeof recipeDetailsWithChef);
    const [isFavorite, setIsFavorite] = useState(false);

    const toasty = () => {
        setIsFavorite(true);
        toast("Bookmark Added")
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img loading='lazy' className='h-96 w-96' src={recipeDetailsWithChef.chef_picture} />
                    <div>
                        <h1 className="text-5xl font-bold">{recipeDetailsWithChef.chef_name}</h1>
                        <div className='text-2xl'>
                            <p className="py-6">Bio: {recipeDetailsWithChef.bio}</p>
                            <p> {recipeDetailsWithChef.years_of_experience} years of Experience</p>
                            <p>Likes: {recipeDetailsWithChef.likes}</p>
                            <p> number of Recipes: {recipeDetailsWithChef.num_recipes}</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='grid gap-6 md:grid-cols-3 sm:grid-cols-2 mx-16 '>
                {
                    recipeDetailsWithChef.recipe_items.map((recipe) =>
                        <div key={recipe.recipe_chef_id} className="card card-compact w-96 bg-base-100 mt-4 mb-4 ml-4">
                            <div className="card w-96 bg-primary text-primary-content">
                                <div className="card-body">
                                    <div className=''>
                                        {/* <p onClick={() => toasty()} disabled={isFavorite} className='w-20 cursor-pointer'>
                                        {isFavorite ? <FaBookmark></FaBookmark> : <FaBookmark></FaBookmark>}
                                            </p> */}
                                        <button onClick={() => toasty()} className='btn btn-success'>Favourite</button>

                                    </div>
                                    <ToastContainer />
                                    <h2 className="text-lg"><span className='font-bold'>Recipe Name:</span> {recipe.name}</h2>

                                    <p className='text-lg'><span className='font-bold'>Ingredients:</span>{recipe.ingredients}</p>
                                    <p className='text-lg'><span className='font-bold'>Cooking Method:</span>{recipe.method}</p>
                                    <div className='flex items-center'>
                                        <p className='text-lg'>Rating:</p>
                                        <Rating style={{ maxWidth: 250 }} value={recipe.rating} readOnly />
                                        <span className='font-bold'>
                                            {recipe.rating}
                                        </span> 
                                    </div>

                                </div>

                            </div>
                        </div>)
                }


            </div>



        </div>
    );
};

export default ViewRecipes;
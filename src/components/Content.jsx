import {Routes, Route} from 'react-router-dom';
import { useState } from "react";

import Recipe from "./Recipe";
import AboutPage from '../pages/AboutPage';
import RecipeDetail from '../pages/RecipeDetail';
import NewRecipePage from '../pages/NewRecipePage';
import ModifyRecipe from '../pages/ModifyRecipe';
import ErrorPage from '../pages/ErrorPage';

import RecipesList from "../assets/recipies.json"

function Content ({toggle}) {

    const [recipeArray, setRecipeArray] = useState(RecipesList);

    return(
        <div className={Content + ` ` + (toggle ? ``:`Content-toggle`)}>
            <Routes>
                <Route path="/" element={<Recipe recipeArray={recipeArray} setRecipeArray={setRecipeArray} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/recipedetail/:recipeID" element={<RecipeDetail recipeArray={recipeArray}/>} />
                <Route path="/modify/:recipeID" element={<ModifyRecipe recipeArray={recipeArray} setRecipeArray={setRecipeArray}/>} />
                <Route path="/newrecipe" element={<NewRecipePage recipeArray={recipeArray} setRecipeArray={setRecipeArray} />} />

                <Route path="*" element={ <ErrorPage /> } />
            </Routes>
        </div>
    )
}

export default Content;
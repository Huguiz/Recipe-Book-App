import React from "react";
import '../App.css'
import RecipesList from "../assets/recipies.json"
import { useState } from "react";
import { Link } from "react-router-dom"
import RecipeDetail from "../pages/Recipedetail";

export default function Recipe() {

    const [recipeArray, setRecipeArray] = useState(RecipesList)

    function deleteRecipe(recipeID) {
        const newRecipeArray = recipeArray.filter((recipe) => {
            return recipe.id !== recipeID;
        })
        setRecipeArray(newRecipeArray);
    }

    return(
        recipeArray.map((element) => {
            return(
                <div className="RecipeBox" key={element.id}>
                    <img className="RecipeBox-Img" src={element.image} alt="RecipeImg" />    
                    <div className="RecipeBox-Txt">
                        <Link to={`/recipedetail/${element.id}`}>
                            <h2>{element.name}</h2>
                        </ Link>
                    </div>
                    <button className="RecipeBox-Btn-Delete" onClick={() => deleteRecipe(element.id)}>Delete</button>
                </div>
            )
        })
    )
}
import React from "react";
import '../App.css'
import RecipesList from "../assets/recipies.json"
import { useState } from "react";

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
                        <h2>{element.name}</h2>
                        <div>
                        <p><b>Calories:</b> {element.calories}</p>
                        <p><b>Servings:</b> {element.servings}</p>
                        </div>
                    </div>

                    <button className="RecipeBox-Btn-Delete" onClick={() => deleteRecipe(element.id)}>Delete</button>

                </div>
            )
        })
    )
}
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
                    <div className="RecipeBox-Img">
                        <img src={element.image} alt="RecipeImg" />
                    </div>
                    <div className="RecipeBox-Txt">
                        <h2>{element.name}</h2>
                        <p>Calories : {element.calories}</p>
                        <p>Servings : {element.servings}</p>
                    </div>
                    <div className="RecipeBox-Btn-Delete">
                        <button onClick={() => deleteRecipe(element.id)}>Delete</button>
                    </div>
                </div>
            )
        })
    )
}
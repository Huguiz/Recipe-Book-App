import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Recipe(props) {
    function deleteRecipe(recipeID) {
        const newRecipeArray = props.recipeArray.filter((recipe) => {
            return recipe.id !== recipeID;
        })
        props.setRecipeArray(newRecipeArray);
    }

    return(
        props.recipeArray.map((element) => {
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
import '../App.css';
import { useState } from 'react';
import RecipeForm from '/src/components/RecipeForm';
import { useNavigate } from 'react-router-dom';

export default function NewRecipePage(props) {

    const [name, setName]= useState("");
    const [image, setImage]= useState("");
    const [calories, setCalories]= useState(0);
    const [servings, setServings]= useState(1);
    const navigate = useNavigate();

    function generateUuidv4() {
        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }

    function addRecipe(e) {

        e.preventDefault();

        const newRecipeObj = {
            id: generateUuidv4(),
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }
        const newRecipeArray = [newRecipeObj, ...props.recipeArray]
        props.setRecipeArray(newRecipeArray);

        alert(`Recipe added!`);

        setName("");
        setImage("");
        setCalories(0);
        setServings(1);

        navigate("/");

    }

 
    return(
        <RecipeForm fn={addRecipe} name={name} setName={setName} image={image} setImage={setImage} calories={calories} setCalories={setCalories} servings={servings} setServings={setServings} action="Add"/>
    )
}
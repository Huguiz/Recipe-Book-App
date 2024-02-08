import { Link, useParams, useNavigate } from 'react-router-dom';
import RecipeForm from '../components/RecipeForm';
import {useState} from 'react';

function ModifyRecipe ({recipeArray, setRecipeArray}) {

	let {recipeID} = useParams();
	const recipeElm = recipeArray.find((element) => element.id == recipeID);
	const navigate = useNavigate();

	const [name, setName]= useState(recipeElm.name);
    const [image, setImage]= useState(recipeElm.image);
    const [calories, setCalories]= useState(recipeElm.calories);
    const [servings, setServings]= useState(recipeElm.servings);


	console.log(recipeElm);

	function generateUuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }


	const updateRecipe = (e) => {

		e.preventDefault();

        const newRecipeObj = {
            id: generateUuidv4(),
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        const recipeIndex = recipeArray.findIndex(recipes => recipes.id === recipeID)

        const newRecipeArray = [...recipeArray];

        newRecipeArray.splice(recipeIndex, 1, newRecipeObj);
        recipeID = newRecipeObj.id;

        setRecipeArray(newRecipeArray);

        navigate(`/recipedetail/${recipeID}`);

        alert(`Recipe saved!`);


	}

	return (

			<RecipeForm fn={updateRecipe} name={name} setName={setName} image={image} setImage={setImage} calories={calories} setCalories={setCalories} servings={servings} setServings={setServings} action="Edit"/>

		)

}

export default ModifyRecipe;
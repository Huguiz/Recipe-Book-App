import '../App.css';
import { useState } from 'react';

export default function NewRecipePage(props) {

    const [name, setName]= useState("");
    const [image, setImage]= useState("");
    const [calories, setCalories]= useState(0);
    const [servings, setServings]= useState(1);

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
    }

    return(
        <div className="AddRecipeBox">
            <form onSubmit={addRecipe}>
                <h3>Add a recipe :</h3>
                <div>
                <label>
                    Recipe name
                    <input name="name" type="text" placeholder="Name" value={name} required={true} onChange={(e) => setName(e.target.value)} />
                </label>

                <label>
                    Recipe Image
                    <input name="image" type="url" placeholder="Recipe Image" value={image} required={true} onChange={(e) => setImage(e.target.value)} />
                </label>

                <label>
                    Calories
                    <input name="calories" type="number" placeholder="Calories" value={calories} required={true} onChange={(e) => setCalories(e.target.value)} />
                </label>
                <label>
                    Servings
                    <input
                    name="servings"
                    type="number"
                    placeholder="Servings"
                    minLength={1}
                    maxLength={1}
                    min={1}
                    max={9}
                    value={servings}
                    required={true}
                    onChange={(e) => setServings(e.target.value)} 
                    />
                </label>
                <button type="submit">Add recipe</button>
                </div>
            </form>
        </div>
    )
}
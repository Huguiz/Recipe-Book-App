import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function RecipeForm ({fn, e, name, setName, image, setImage, calories, setCalories, servings, setServings, action}) {

    const navigate = useNavigate();

	
	return (
		<div className="AddRecipeBox">
            <form onSubmit={fn}>
                <h3>{action} a recipe:</h3>
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
                <button type="submit">Save</button>
                <button type="button" onClick={() => navigate(-1)}>Cancel</button>
                </div>
            </form>
        </div>
	)

}

export default RecipeForm;
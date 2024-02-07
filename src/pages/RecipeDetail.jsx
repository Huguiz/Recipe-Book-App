import '../App.css';
import RecipeList from '../assets/recipies.json'
import { Link, useParams } from 'react-router-dom';

function RecipeDetail () {
	const recipeObj = useParams();
	const recipeElm = RecipeList.find((element) => element.id == recipeObj.recipeID)

	return (
		<div className="RecipeDetail">
			<img src={recipeElm.image} alt="" />
			<div className="RecipeDetail-Txt">
				<h2>{recipeElm.name}</h2>
				<br />
				<p>Calories : {recipeElm.calories}</p>
                <p>Servings : {recipeElm.servings}</p>
			</div>
			<Link to={"/"}>
				<button>Back</button>
			</Link>
		</div>
	)
}

export default RecipeDetail;
import '../App.css';
import { Link, useParams } from 'react-router-dom';

function RecipeDetail (props) {

	const recipeObj = useParams();
	const recipeElm = props.recipeArray.find((element) => element.id == recipeObj.recipeID);

	return (
		<div className="RecipeDetail">
			<img src={recipeElm.image} alt="" />
			<div className="RecipeDetail-Txt">
				<h2>{recipeElm.name}</h2>
				<br />
				<p>Calories : {recipeElm.calories}</p>
                <p>Servings : {recipeElm.servings}</p>
				{recipeElm.origin && <img src={`https://flagsapi.com/${recipeElm.origin}/shiny/64.png`}/>}
			</div>
			<Link to={`/modify/${recipeElm.id}`}>
				<button>Edit</button>
			</Link>
			<Link to={"/"}>
				<button>Back</button>
			</Link>
		</div>
	)
}

export default RecipeDetail;
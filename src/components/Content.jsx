import {Routes, Route} from 'react-router-dom';

import Recipe from "./Recipe";
import AboutPage from '../pages/AboutPage';
import RecipeDetail from '../pages/Recipedetail';

function Content ({toggle}) {

    return(
        <div className={Content + ` ` + (toggle ? ``:`Content-toggle`)}>
            <Routes>
                <Route path="/" element={<Recipe />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/recipedetail/:recipeID" element={<RecipeDetail />} />
            </Routes>
        </div>
    )
}

export default Content;
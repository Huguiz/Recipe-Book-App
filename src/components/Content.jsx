import {Routes, Route} from 'react-router-dom';

import Recipe from "./Recipe";
import AboutPage from '../pages/AboutPage';
import RecipeDetail from '../pages/RecipeDetail';
import ErrorPage from '../pages/ErrorPage';

function Content ({toggle}) {

    return(
        <div className={Content + ` ` + (toggle ? ``:`Content-toggle`)}>
            <Routes>
                <Route path="/" element={<Recipe />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/recipedetail/:recipeID" element={<RecipeDetail />} />

                <Route path="*" element={ <ErrorPage /> } />
            </Routes>
        </div>
    )
}

export default Content;
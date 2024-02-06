import {Routes, Route} from 'react-router-dom';

import Recipe from "./Recipe";
import AboutPage from '../pages/AboutPage';

function Content ({toggle}) {

    return(
        
        <>
        <div className={Content + ` ` + (toggle ? ``:`Content-toggle`)}>

            <Routes>
                
                <Route path="/" element={<Recipe />} />
                <Route path="/about" element={<AboutPage />} />
                
            </Routes>

        </div>
        </>

    )
}

export default Content;
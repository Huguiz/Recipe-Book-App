import {Link} from 'react-router-dom';

function Sidebar ({toggle}) {
    return (
        <div className={Sidebar + ` ` + (toggle ? `hidden`:``)}>
            <menu>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/newrecipe">Add Recipe</Link></li>
                <li><Link to="/about">About</Link></li>
            </menu>
        </div>
    )
}

export default Sidebar;
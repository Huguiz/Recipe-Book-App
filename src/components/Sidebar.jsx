import {Link} from 'react-router-dom';

function Sidebar () {
    return (
        <div className="Sidebar">
            <menu>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </menu>
        </div>
    )
}

export default Sidebar;
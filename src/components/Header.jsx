import menuBtn from "../assets/menu-icon.png";
import appLogo from "../assets/app-logo.png";

function Header({menuToggle}) {
    return (
        <div className="top">

            <button className="menuBtn" onClick={menuToggle}><img src={menuBtn} alt="menuBtn"/></button>
            <img src={appLogo} alt="appLogo" className="appLogo"/>
        </div>
    )
}

export default Header;
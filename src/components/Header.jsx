import menuBtn from "../assets/menu-icon.png";
import appLogo from "../assets/app-logo.png";

function Header() {
    return (
        <div className="top">
            <img src={menuBtn} alt="menuBtn" className="menuBtn"/>
            <img src={appLogo} alt="appLogo" className="appLogo"/>
        </div>
    )
}

export default Header
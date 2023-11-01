


import "./Header.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import { useAuthenticationContext } from "../contexts/AuthenticationContext"


export default function Header({className, title, listOfLinks}) {

    const {isLoggedIn, hLogout} = useAuthenticationContext();
    const isAuthorized = isLoggedIn();

    return (
        <div className={`${className ? className : ""} header`}>

            <span className="header__title">FRIENDS DATABASE</span>

            <div className="header__right">
                <nav className="header__nav">
                    <ul className="links">
                        { !isAuthorized && <li><NavLink to="/login" className="link">LOGIN.</NavLink></li>}
                        { isAuthorized && <li><NavLink to="/friends" className="link">FRIENDS.</NavLink></li>}
                        { isAuthorized && <li><NavLink to="/friends/add" className="link">ADDFRIEND.</NavLink></li>}
                    </ul>
                </nav>
                    { isAuthorized && <button onClick={hLogout} className="header__button">LOGOUT</button>}
            </div>
        </div>
    )
}
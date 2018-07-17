import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => (
    <div className="header">
        <div className="content-container">
            <div className="header__content">
            <div>
            <Link className="header__title" to="/"><h1>{props.title}</h1></Link>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
            </div>
                <div>
                    <Link className="header__link" to="/episodes">Episode List</Link>
                </div>
            </div>
        </div>
    </div>
);


Header.defaultProps = {
    title: "Librarians Episode Selector"
}

export default Header;

//                {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}


/*export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard"><h1>Expenses Demo</h1></Link>
                <div>
                    <Link className="header__link" to="/about">About</Link>
                    <button className="button button--link" onClick={startLogout}>Logout</button>
                </div>
            </div>
        </div>
    </header>
);*/
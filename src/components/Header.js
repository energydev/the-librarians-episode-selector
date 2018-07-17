import React from "react";
import { Link, withRouter } from "react-router-dom";

export const Header = (props) => (
    <div className="header">
        <div className="content-container">
            <div className="header__content">
            <div>
            <Link className="header__title" to={(location.pathname.includes("the-librarians-episode-selector") ? "/the-librarians-episode-selector/" : "/")}><h1>{props.title}</h1></Link>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
            </div>
                <div>
                    <Link className="header__link" to={(location.pathname.includes("the-librarians-episode-selector") ? "/the-librarians-episode-selector/episodes" : "/episodes")}>Episode List</Link>
                </div>
            </div>
        </div>
    </div>
);


Header.defaultProps = {
    title: "Librarians Episode Selector"
}

export default withRouter(Header);

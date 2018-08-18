import React from "react";
import Link from "gatsby-link";

export default () => (
    <div>
        <nav>
            <Link to="/"> Home </Link>|
            <Link to="/page-2"> Page Two </Link>|
            <Link to="/page-3"> Page Three </Link>
        </nav>
        <div>
            <p>Hello Gatsby from the Third Gatsby page!</p>
            <Link to="/">Go back</Link>
        </div>
    </div>
);
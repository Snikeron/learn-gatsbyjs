import React from "react";
import Link from "gatsby-link";

export default () => 
    <div style={{color: "tomato"}}>
        <nav>
            <Link to="/"> Home </Link>|
            <Link to="/page-2"> Page Two </Link>|
            <Link to="/page-3"> Page Three </Link>|
            <Link to="/counter/"> Counter </Link>
        </nav>
        <h1>
            Hello Gatsby!
        </h1>
        <p>
            What a world.
        </p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>

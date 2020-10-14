import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/header.scss';


const Header = ()=>{
    return(
    <>
    <div>
    
        <div className="navBar">
            <a href="/"><ul>Home</ul></a>
            <a href="/blog"><ul>Blog</ul></a>
            <a href="/about"><ul>About</ul></a>
            <a href="/contact"><ul>Contact</ul></a>
            <a href="/testimonials"><ul>Testimonials</ul></a>
            <a href="/freeResources"><ul>Free resources</ul></a>
        </div>
        </div>
        </>
    )
}

export default Header;
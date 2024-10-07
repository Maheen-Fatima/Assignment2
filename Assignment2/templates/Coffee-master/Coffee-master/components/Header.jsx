import React from 'react';

const Header = () => {
    return (
        <header id="header">
            <div className="header-top">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-8 col-sm-4 col-8 header-top-right no-padding">
                            <ul>
                                <li>Mon-Fri: 8am to 2pm</li>
                                <li>Sat-Sun: 11am to 4pm</li>
                                <li><a href="tel:(012) 6985 236 7512">(012) 6985 236 7512</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center justify-content-between d-flex">
                    <div id="logo">
                        <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-active"><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#coffee">Coffee</a></li>
                            <li><a href="#review">Review</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li className="menu-has-children"><a href="">Pages</a>
                                <ul>
                                    <li><a href="generic.html">Generic</a></li>
                                    <li><a href="elements.html">Elements</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;

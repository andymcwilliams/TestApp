import React from 'react'
import logo from '../resources/logo.svg';
import ham from '../resources/ham.svg';
import exit from '../resources/exit.svg';
import scroll from '../resources/scroll.svg';
import calendar from '../resources/icon-1.svg';
import icon2 from '../resources/icon-2.svg';
import icon3 from '../resources/icon-3.svg';
import user1 from '../resources/user1.png';
import user2 from '../resources/user2.png';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

var About = () => {

    return (
        <body>
            <div className="container">
                <header>
                    <img src={logo} alt="react logo" className="top-logo" /> 
                    
                    <nav>
                        <a href="/" class="hide-desktop">
                            <img src={ham} alt="toggle menu" class="menu" id="menu" />
                        </a>
                        
                        <ul class="show-desktop hide-mobile" id="nav">
                            <li><img id="exit" class="exit-btn hide-desktop" src={exit} alt="exit-btn" /></li>
                            <li><a href="/">Go Home</a></li>
                        </ul>
                    </nav>
                </header>

                <section>
                    <img src={logo} alt="server" className="server"/>
                    <h1>Weight loss league for a squad.</h1>
                    <p class="subhead">Create a weight loss league with your friends</p>
                    <img src={scroll} alt="scroll" class="scroll hide-mobile show-desktop"/>
                </section>
            </div>
            <div class="blue-container">
                <div class="container">
                    <ul>
                        <li>
                            <img src={calendar} alt="Calendar icon" />
                            <p>paragraph of words</p>
                        </li>
                        <li>
                            <img src={icon2} alt="Calendar icon" />
                            <p>paragraph of words</p>
                        </li>
                        <li>
                            <img src={icon3} alt="Calendar icon" />
                            <p>paragraph of words</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="grey-container">
                <div class="container">
                    <ul>
                        <li>
                            <figure>
                                <img src={user1} alt="user 1" />
                                <blockquote>fake news</blockquote>
                                <figcaption>- joan smith</figcaption>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <img src={user2} alt="user 2" />
                                <blockquote>fake news</blockquote>
                                <figcaption>- jon smith</figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container">
                <h2>Create your league now!</h2>
                <DefaultButton
                    text='Create League!'
                    primary={true}
                    onClick={() => alert('hello')} 
                    href="\"/>
            </div>

            <footer>
                <div className="footer-container">
                    <div className="container">
                        <a href="/">
                            <img src={logo} className="logo" alt="logo" />
                        </a>
                            <p className="address">The internet, somewhere...</p>
                            <ul className="footer-links">
                                <li><a href="/">Terms of Service</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                            </ul>
                    </div>
                </div>
            </footer>
        </body>
    )
}

export default About;
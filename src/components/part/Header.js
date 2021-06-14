import React from 'react'

import {Link} from 'react-router-dom';

const Header = () => {

    return (

        <>

            <nav className="et-navbar navbar">

                <Link to="/"><a className="logo h6 mb-0 text-decoration-none" href="#">TCV Test</a></Link>

                <ul className="nostyle nav-links inline mr-lg-auto text-right text-lg-left flex-lg-grow-1 mb-0">

                    <li><Link to="/"><a href="#">Home</a></Link></li>

                    <li><Link to="/events"><a href="#">Events</a></Link></li>

                    <li><Link to="/"><a href="#">Faqs</a></Link></li>

                    <li><Link to="/"><a href="#">Contact</a></Link></li>
            
                </ul>

            </nav>

            <nav id="et-mobile-nav">
                
                <ul className="text-capitalize">

                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/events">Events</Link></li>

                    <li><Link to="/">Faqs</Link></li>

                    <li><Link to="/">Contact</Link></li>

                </ul>

            </nav>

        </>

    )
}

export default Header


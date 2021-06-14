import React from 'react'

import {Link} from 'react-router-dom';

const Footer = () => {

    return (

        <>

            <footer id="et-site-footer" className="container-fluid position-relative bg-footer text-white pt-5 pb-2">

                <div className="container">

                    <div className="row">

                        <div className="col-md-3 about widget">

                            <Link to="/"><a className="logo h6 mb-0 text-decoration-none text-white" href="#">TCV Test</a></Link>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <ul className="social nostyle inline text-white p-0">

                                <li className="mr-2"><a href="#" className="text-white d-block text-decoration-none transition"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>

                                <li className="mr-2"><a href="#" className="text-white d-block text-decoration-none transition"><i className="fab fa-google" aria-hidden="true"></i></a></li>

                                <li className="mr-2"><a href="#" className="text-white d-block text-decoration-none transition"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>

                                <li className="mr-2"><a href="#" className="text-white d-block text-decoration-none transition"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>

                                <li className="mr-2"><a href="#" className="text-white d-block text-decoration-none transition"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>

                            </ul>

                        </div>
                        <div className="col-md-3 contact widget">

                            <h5>Contact Us</h5>

                            <ul className="nostyle text-white p-0">

                                <li className="mt-4 d-block"><i className="fas fa-envelope"></i>&nbsp; test@test.com</li>

                                <li className="mt-4 d-block"><i className="fas fa-phone-alt"></i>&nbsp; 23481028372</li>

                                <li className="mt-4 d-block"><i className="fas fa-map-marker-alt"></i>&nbsp; lorem ipsum lorem ipsum</li>

                            </ul>

                        </div>

                        <div className="col-md-3 navigation widget">

                            <h5>Navigation</h5>

                            <ul className="nostyle text-white p-0">

                                <li className="mt-4 d-block"><Link to="/">Home</Link></li>

                                <li className="mt-4 d-block"><Link to="/events">Events</Link></li>

                                <li className="mt-4 d-block"><a href="#">Faqs</a></li>

                                <li className="mt-4 d-block"><a href="#">Contact</a></li>

                            </ul>

                        </div>

                    </div>

                </div>

            </footer>

        </>

    )
    
}

export default Footer

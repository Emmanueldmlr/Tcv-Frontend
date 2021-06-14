import React from 'react'

import {Link} from 'react-router-dom';

const Footer = () => {

    return (

        <>

            <footer id="et-site-footer" class="container-fluid position-relative bg-footer text-white pt-5 pb-2">

                <div class="container">

                    <div class="row">

                        <div class="col-md-3 about widget">

                            <Link to="/"><a class="logo h6 mb-0 text-decoration-none text-white" href="#">TCV Test</a></Link>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <ul class="social nostyle inline text-white p-0">

                                <li class="mr-2"><a href="#" class="text-white d-block text-decoration-none transition"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>

                                <li class="mr-2"><a href="#" class="text-white d-block text-decoration-none transition"><i class="fab fa-google" aria-hidden="true"></i></a></li>

                                <li class="mr-2"><a href="#" class="text-white d-block text-decoration-none transition"><i class="fab fa-instagram" aria-hidden="true"></i></a></li>

                                <li class="mr-2"><a href="#" class="text-white d-block text-decoration-none transition"><i class="fab fa-youtube" aria-hidden="true"></i></a></li>

                                <li class="mr-2"><a href="#" class="text-white d-block text-decoration-none transition"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>

                            </ul>

                        </div>
                        <div class="col-md-3 contact widget">

                            <h5>Contact Us</h5>

                            <ul class="nostyle text-white p-0">

                                <li class="mt-4 d-block"><i class="fas fa-envelope"></i>&nbsp; test@test.com</li>

                                <li class="mt-4 d-block"><i class="fas fa-phone-alt"></i>&nbsp; 23481028372</li>

                                <li class="mt-4 d-block"><i class="fas fa-map-marker-alt"></i>&nbsp; lorem ipsum lorem ipsum</li>

                            </ul>

                        </div>

                        <div class="col-md-3 navigation widget">

                            <h5>Navigation</h5>

                            <ul class="nostyle text-white p-0">

                                <li class="mt-4 d-block"><a href="#">Home</a></li>

                                <li class="mt-4 d-block"><a href="#">Events</a></li>

                                <li class="mt-4 d-block"><a href="#">Faqs</a></li>

                                <li class="mt-4 d-block"><a href="#">Contact</a></li>

                            </ul>

                        </div>

                    </div>

                </div>

            </footer>

        </>

    )
    
}

export default Footer

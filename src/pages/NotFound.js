import React from 'react';

import { useHistory } from "react-router";



const NotFound = () => {

    const history = useHistory();

    return(
    
         <section id="et-notfound" className="img-overlay no-hover d-flex align-items-center justify-content-center text-center text-white">

            <div className="data position-relative">

                <h1 className="display-1 text-white">404</h1>

                <p className="desc">Ooops! The content you are looking for is not available or maybe broken.</p>

                <a href="#" onClick={ () => {  history.goBack();  } } className="btn bg-white shadow border-0"><i className="fas fa-angle-double-left btn-icon"></i>Go Back</a>                
           
           </div>
        
        </section>

    );
  
}


export default NotFound;
import React from 'react';

import { Route } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';

import Header from '../part/Header';

import Footer from '../part/Footer';

export const Guest = ({component: Component, ...rest}) => {

    
    return(

        <ErrorBoundary>

           <Route
            
                {...rest} 

                render={

                    (props) => {
                    
                            return (
                                <>
                                
                                    <Header />

                                    <Component  {...props} /> 
                                    
                                    <Footer /> 

                                </>
                            )
        
                    }
                }
                
            /> 
            
        </ErrorBoundary>
    );
}
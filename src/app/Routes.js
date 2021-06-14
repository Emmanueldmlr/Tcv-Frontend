import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NotFound from '../pages/NotFound';

import {Guest} from '../components/guard/Guest';

import Home from '../pages'

import Event from '../pages/Event'

import ViewEvent from '../pages/ViewEvent'

const Routes = (props) => {
     
    return(

        <Router>

            <Switch>

                <Guest path="/" exact component={Home} />

                <Guest path="/events" exact component={Event} />

                <Guest path="/events/:slug" exact component={ViewEvent}/>

                <Route path="*" exact component={NotFound} />

            </Switch>

        </Router>
    )
    
}

export default Routes;
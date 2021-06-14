import React, {useEffect} from 'react'

import Banner from '../components/part/Banner'

import Card from '../components/main/Card'

import { sampleData } from '../config/mockData'

import {useLocation} from "react-router-dom";

import {getPaginatedEvents} from '../redux/actions/eventActions'


import { useSelector, useDispatch } from 'react-redux'



const Events = (props) => {

    const params = useLocation().search;

    const pageNumber = new URLSearchParams(params).get('page');

    const {events, loading} = useSelector(state => state.event)

    const dispatch = useDispatch()

    useEffect(() => {

        if(!events){

            dispatch(getPaginatedEvents(pageNumber))
                
        }

    }, [])

    const handleEventNavigation = (page) => {

        dispatch(getPaginatedEvents(page))

    }

    return (

        <>

            <Banner />
            
            <section id="et-latest-news" className="container-fluid" style={{ marginTop: "-20px" }}>

                <div className="container">

                    <h3 className="mb-0">All Events</h3>


                    {
                        loading ?

                            <div className="row">

                                 {
                                     sampleData.map( data => (
                                        <Card loading/>
                                    ))
                                 }

                            </div>
                             
                        :
                        <>
                            <div className="row">

                                {
                                    events && events.docs.length > 0
                                    
                                    ?
                                    
                                    events.docs.map( event => (

                                            <Card data={event}/>

                                        ))
                                    :
                                    <p>No Result Found</p>
                                }

                            </div>

                            {
                                 events &&

                                    <div className="owl-nav">

                                        <button onClick={ () => handleEventNavigation(events.prevPage) } type="button" role="presentation" className="owl-prev" disabled={!events.hasPrevPage}>
        
                                            <span aria-label="Previous">‹</span>
        
                                        </button>
        
                                        <button onClick={ () => handleEventNavigation(events.nextPage) } type="button" role="presentation" className="owl-next" disabled={!events.hasNextPage}>
        
                                            <span aria-label="Next">›</span>
        
                                        </button>
    
                                    </div>
                            }

                        </>

                    }

                    
                </div>
            </section>
        </>

    )

}

export default Events

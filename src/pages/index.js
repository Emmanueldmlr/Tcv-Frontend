import React, { useEffect } from 'react'

import HomeMaster from '../components/part/HomeMaster'

import Card from '../components/main/Card'

import { useSelector, useDispatch } from 'react-redux'

import { getLatestEvents } from '../redux/actions/eventActions'

import {sampleData} from '../config/mockData'

import {Link} from 'react-router-dom';


const Index = () => {

    const {latestEvents, loading } = useSelector( state => state.event)

    const dispatch = useDispatch()

    useEffect( ()=> {

        if(!latestEvents){

            dispatch(getLatestEvents())
        }

    }, [])

    return (

        <>

            <HomeMaster/>

            <section id="et-latest-news" class="container-fluid">
                
                <div class="container">

                    <div class="section-heading">

                        <p>Get Latest events here.</p>

                        <br/>

                        <h2 class="mb-0">Latest Events</h2>

                    </div>

                    {
                        loading ?

                            <div class="row">

                                 {
                                     sampleData.map( data => (
                                        <Card loading/>
                                    ))
                                 }

                            </div>
                             
                        :
                        <>

                            <div class="row">

                                {
                                    latestEvents && latestEvents.length > 0
                                    
                                    ?
                                    
                                    latestEvents.map( latestEvent => (

                                            <Card data={latestEvent}/>

                                        ))
                                    :
                                    <p>No Result Found</p>
                                }

                            </div>

                            <div class="text-center">
                                
                                <Link to="/events">

                                      <a href="#" class="btn btn-primary border-0 mt-3"><i class="fas fa-angle-right btn-icon"></i>View All</a>
                                
                                </Link>

                            </div>
                        </>


                    }

                </div>
            </section>
        </>

    )

}

export default Index

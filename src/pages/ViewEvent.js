import React, {useEffect, useState} from 'react'

import EventBanner from '../components/part/EventBanner'

import Card from '../components/main/Card'

import {useParams} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'

import {getSingleEvent} from '../redux/actions/eventActions'

import NotFound from './NotFound';



const ViewEvent = () => {

    const {slug} = useParams()

    const {singleEvent, loading, msg } = useSelector( state => state.event)

    const dispatch = useDispatch()

    console.log(loading)

    useEffect(() => {

        dispatch(getSingleEvent(slug))

    }, [slug])


    return (

        <>

            {

                loading ? <EventBanner loading={true}/>

                :

                !loading && singleEvent ? 

                    <>

                        <EventBanner data={singleEvent} />

                        <section id="et-content" className="container-fluid">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                    
                                        <div id="data-description" className="event-description shadow rounded p-5 content-box mt-5">
                                            <h4 className="mb-4 font-weight-bold">Description</h4>
                                              <p className="description">{singleEvent.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </section>

                    </>
                :

                <NotFound/>


            }

        </>
    
    )

}


export default ViewEvent

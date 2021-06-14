import React from 'react'

import Skeleton from '@material-ui/lab/Skeleton';
import { formatDate, trimStrings } from '../../utitlities/util';

const EventBanner = ({data, loading}) => {

    return (

            <section id="et-event-masthead" className="container-fluid position-relative img-overlay no-hover">

                <div className="container position-relative">

                    <div className="mb-rev d-md-flex align-items-end">

                        <div className="col-lg-5 col-md-6 col-sm-12">

                            <div className="event-intro shadow bg-white">

                                {

                                    loading ? 

                                    <>
                                        <Skeleton width="60%" />

                                        <Skeleton width="60%" />

                                    </>

                                    :
                                    <>

                                        <h1 className="mb-4">{data.title} &nbsp;<i className="fas fa-check-circle text-green"></i></h1>
                                
                                        <p className="description mb-4">
                                        
                                            {trimStrings(100, data.description)}
                                        
                                        </p>
                                    </>

                                }

                                

                                <div className="d-md-flex justify-content-between">
                                   
                                    <div className="info">

                                        {
                                            
                                            !loading && 

                                            <>

                                                <div className="h6"><i className="icon-clock text-primary"></i>&nbsp; {formatDate(data.date)}</div>
                                                                                
                                                <div className="text-primary"><i className="fas fa-thumbtack"></i>&nbsp; {data.isVirtual ? "Virtual" : "Physical Meeting"}</div>
                                            </>

                                        }
                                    
                                    </div>
                                    
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-7 col-md-6 col-sm-12 d-flex mb-2 flex-wrap pt-md-0 pt-3 align-items-end">
                            
                            <div className="mt-5 w-100 d-none d-md-block">
                                {

                                    loading ? 

                                    <>
                                        <Skeleton width="60%" />

                                        <Skeleton width="60%" />

                                    </>

                                    :

                                    <>

                                <p className="event-location d-inline-block m-0"><i className="icon-compass h3 align-middle"></i>&nbsp; {data.address}</p>
                                          

                                    </>

                                }
                                
                            </div>

                        </div>

                    </div>

                    <div className="clearfix"></div>

                    <br/>
            </div>

        </section>

    )
}

export default EventBanner
import React from 'react'

import Skeleton from '@material-ui/lab/Skeleton';
import { formatDate, trimStrings } from '../../utitlities/util';

const EventBanner = ({data, loading}) => {

    return (

            <section id="et-event-masthead" class="container-fluid position-relative img-overlay no-hover">

                <div class="container position-relative">

                    <div class="mb-rev d-md-flex align-items-end">

                        <div class="col-lg-5 col-md-6 col-sm-12">

                            <div class="event-intro shadow bg-white">

                                {

                                    loading ? 

                                    <>
                                        <Skeleton width="60%" />

                                        <Skeleton width="60%" />

                                    </>

                                    :
                                    <>

                                        <h1 class="mb-4">{data.title} &nbsp;<i class="fas fa-check-circle text-green"></i></h1>
                                
                                        <p class="description mb-4">
                                        
                                            {trimStrings(100, data.description)}
                                        
                                        </p>
                                    </>

                                }

                                

                                <div class="d-md-flex justify-content-between">
                                   
                                    <div class="info">

                                        {
                                            
                                            !loading && 

                                            <>

                                                <div class="h6"><i class="fas fa-clock text-primary"></i>&nbsp; {formatDate(data.date)}</div>
                                                                                
                                                <div class="text-primary"><i class="fas fa-thumbtack"></i>&nbsp; {data.isVirtual ? "Virtual" : "Physical Meeting"}</div>
                                            </>

                                        }
                                    
                                    </div>
                                    
                                </div>

                            </div>

                        </div>

                        <div class="col-lg-7 col-md-6 col-sm-12 d-flex mb-2 flex-wrap pt-md-0 pt-3 align-items-end">
                            
                            <div class="mt-5 w-100 d-none d-md-block">
                                {

                                    loading ? 

                                    <>
                                        <Skeleton width="60%" />

                                        <Skeleton width="60%" />

                                    </>

                                    :

                                    <>

                                <p class="event-location d-inline-block m-0"><i class="fa fa-compass h3 align-middle"></i>&nbsp; {data.address}</p>
                                          

                                    </>

                                }
                                
                            </div>

                        </div>

                    </div>

                    <div class="clearfix"></div>

                    <br/>
            </div>

        </section>

    )
}

export default EventBanner
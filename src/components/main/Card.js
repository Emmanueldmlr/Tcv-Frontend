import React from 'react'

import Skeleton from '@material-ui/lab/Skeleton';

import {trimStrings, formatDate} from '../../utitlities/util'

import { Link } from 'react-router-dom';

const Card = ({ loading, data}) => {
    
    return (

        <div class="col-md-3 pt-25">

            <div class="blog-grid rounded shadow">

                <div class="image-wrap position-relative">

                    {

                        loading ? 

                             <Skeleton variant="rect" width={300} height={150} class="img-fluid rounded-top" />
                       
                        :
                        <>

                            <span class="badge badge-danger photocount position-absolute">{data.category.title}</span>
                           
                            <img src="/assets/img/event-grid-1.jpg" alt="img" class="img-fluid rounded-top"/>
                        
                        </>

                    }
                    
                </div>
                <div class="content p-4">

                    {
                        loading ? 

                        <>

                            <Skeleton />

                            <Skeleton width="60%" />

                        </>
                        :
                        <>
                            <p class="text-muted">Posted on {formatDate(data.createdAt)}</p>

                            <h4 class="mb-3"><a href="#" class="text-decoration-none text-reset">{trimStrings(17,data.title)}</a></h4>
                            
                            <p class="description">
                                
                                {
                                    
                                    trimStrings(50,data.description)
                               
                               }
                            
                            </p>
                            
                            <div class="info">
                                
                                <div class="mb-2"><i class="fas fa-clock"></i>&nbsp; {formatDate(data.date)}</div>
                                 
                                 <div class="mb-2"><i class="fas fa-map-marker"></i>&nbsp; {data.address}</div>
                                
                                <div class="text-secondary"><i class="fas fa-thumbtack"></i>&nbsp; {data.isVirtual ? "Virtual" : "Physical Meeting"}</div>
                            
                            </div>
                            
                            <hr/>
                            
                            <div class="d-flex align-items-center">

                                <Link to={"/events/"+ data.slug}>

                                     <a href="#" class="text-decoration-none text-primary">View Event</a>

                                </Link>
                            
                            </div>
                        
                        </>
                    }
                    
                </div>

            </div>

        </div>

    )
}

export default Card

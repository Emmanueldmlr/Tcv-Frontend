import React from 'react'

import Skeleton from '@material-ui/lab/Skeleton';

import {trimStrings, formatDate} from '../../utitlities/util'

import { Link } from 'react-router-dom';

const Card = ({ loading, data}) => {
    
    return (

        <div className="col-md-3 pt-25">

            <div className="blog-grid rounded shadow">

                <div className="image-wrap position-relative">

                    {

                        loading ? 

                             <Skeleton variant="rect" width={300} height={150} className="img-fluid rounded-top" />
                       
                        :
                        <>

                            <span className="badge badge-danger photocount position-absolute">{data.category.title}</span>
                           
                            <img src="/assets/img/event-grid-1.jpg" alt="img" className="img-fluid rounded-top"/>
                        
                        </>

                    }
                    
                </div>
                <div className="content p-4">

                    {
                        loading ? 

                        <>

                            <Skeleton />

                            <Skeleton width="60%" />

                        </>
                        :
                        <>
                            <p className="text-muted">Posted on {formatDate(data.createdAt)}</p>

                            <h4 className="mb-3"><a href="#" className="text-decoration-none text-reset">{trimStrings(17,data.title)}</a></h4>
                            
                            <p className="description">
                                
                                {
                                    
                                    trimStrings(50,data.description)
                               
                               }
                            
                            </p>
                            
                            <div className="info">
                                
                                <div className="mb-2"><i className="icon-clock"></i>&nbsp; {formatDate(data.date)}</div>
                                 
                                 <div className="mb-2"><i className="fas fa-map-marker"></i>&nbsp; {data.address}</div>
                                
                                <div className="text-secondary"><i className="fas fa-thumbtack"></i>&nbsp; {data.isVirtual ? "Virtual" : "Physical Meeting"}</div>
                            
                            </div>
                            
                            <hr/>
                            
                            <div className="d-flex align-items-center">

                                <Link to={"/events/"+ data.slug}>

                                     <a href="#" className="text-decoration-none text-primary">View Event</a>

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

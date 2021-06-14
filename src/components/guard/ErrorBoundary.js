import React, {Component} from 'react';

class ErrorBoundary extends Component{

    constructor(props){

        super(props);

        this.state = { hasError: false };

    }

    static getDerivedStateFromError(error) {

        // Update state so the next render will show the fallback UI.
        return { hasError: true };

    }

    componentDidCatch(error, errorInfo) {

        console.log(errorInfo, error);

    }

    render() {

            return(

                <>

                    { 
                        
                        this.state.hasError ? 

                        <div className="row" style={ {marginTop: "5rem", height:"auto", minHeight:"500px"} }>
                                                        
                            <p className="col-12 text-center">Something went wrong</p>
                            
                        </div>

                    :
                        
                        this.props.children 
                        
                    }
                </>
            );
        

    }
}

export default ErrorBoundary;
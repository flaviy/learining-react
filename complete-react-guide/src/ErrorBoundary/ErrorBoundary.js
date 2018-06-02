import React from "react";

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    state = {
        hasError : false,
        errorMessage  : ''
    }

    componentDidCatch  = (error, info)  => {
        this.setState({errorMessage: error, hasError : true})
    }

    render() {
        if(this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children;
        }
    }
}
export default ErrorBoundary;
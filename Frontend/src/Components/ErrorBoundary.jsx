import React from "react";

class ErrorBoundary extends React.Component {
    state = { hasError: false,
                  info: undefined }

    static getDerivedStateFromError(error) {
        return { hasError: true, info:error }
    }
 
    componentDidCatch(error,info){
        
        console.log("Error Boundary Caught an error",error,"Info", info)
    }

    render(){
        if (this.state.hasError) {
            return <div className="w-full  text-lg outline text-DarkBlue">Error occurred: {this.state.info}</div>
    }
    return this.props.children

}
}

export default ErrorBoundary
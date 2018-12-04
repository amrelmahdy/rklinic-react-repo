import React from "react";

const globalMiddleware = (WrappedComponent) => {
    return  (props) => {

        document.title = "rKlinic | " + props.title;
        return (
            <WrappedComponent {...props} />
        )
    }
};


export default globalMiddleware;

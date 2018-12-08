import React from "react"

const appFeatures = (payload) => (WrappedComponent) => {
    return (props) => {
        return (
            <WrappedComponent {...props} />
        )
    }
};

export default appFeatures;
import React from "react";

const globalMiddleware = (to) => (WrappedComponent) => {
    return  (props) => {
        console.log(props.match)
        switch (props.match.path) {
            case "/about":
                document.title = "vjkjkfjkjfkfkjfkjfkjfkjfkjkfjkfkf";
            
        }
        //document.title = to.title;
        return (
            <WrappedComponent {...props} />
        )
    }
}


export default globalMiddleware;

import React from "react"
import Head from "../components/Head";

const NoMatch = ({ location }) => (
    <div className="Privacy">
        <section className="ftco-section doctors-list-all text-center">
            <div className="container">
                <h3>Page <code>{location.pathname} Not found</code></h3>
            </div>
        </section>
    </div>

);


export default NoMatch;
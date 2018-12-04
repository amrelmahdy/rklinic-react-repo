import React, {Component} from "react";
import Head from "../components/Head";
import Subscribe from "../components/Subscribe";
import {withTranslate} from "react-redux-multilingual"
import globalMiddleware from "./../hocs/globalMiddleware";
import {getHeader} from "../config";
import axios from "axios";
import { Skeleton } from "react-loading-skeleton-placeholders"


class Terms extends Component {

    state = {
        terms: null
    }

    componentDidMount() {
        axios.get("https://rklinic-admin.com/api/system/policies?type=1", {headers: getHeader()}).then(res => {
            if (res.data.Error.status === true) {
                console.log("response", res);
                this.setState({
                    terms: res.data.Response,
                });
            }
        }).catch(err => {
            console.log("error", err);
        })
    }

    render() {

        const history = [
            {
                page: this.props.translate("home"),
                to: "/"
            }
        ]


        const termsList = this.state.terms ?
            this.state.terms.map((policy, index) => {
                return (
                    <div key={index}>
                        <h1>{ policy.name }</h1>
                        <p dangerouslySetInnerHTML={{ __html: policy.condition }} />
                    </div>
                )
            }) :
            (<div>
                <Skeleton amount={4} bigBone={true} />
                <br/>
                <Skeleton amount={4}  bigBone={true} />
                <br />
                <Skeleton amount={4}  bigBone={true} />
            </div>);

        return (
            <div className="Privacy">
                <Head title={this.props.translate("terms_title")} history={history}/>
                <section className="ftco-section doctors-list-all">
                    <div className="container">
                        {termsList}
                    </div>
                </section>

                <Subscribe/>
            </div>
        )
    }
}

export default globalMiddleware(withTranslate(Terms));
import React, {Component} from "react";
import Head from "../components/Head";
import Subscribe from "../components/Subscribe";
import {withTranslate} from "react-redux-multilingual"
import globalMiddleware from "./../hocs/globalMiddleware";
import {getHeader} from "../config";
import axios from "axios";
import { Skeleton } from "react-loading-skeleton-placeholders"


class Privacy extends Component {


    state = {
        policies: null
    }

    componentDidMount() {
        axios.get("https://rklinic-admin.com/api/system/policies?type=0", {headers: getHeader()}).then(res => {
            if (res.data.Error.status === true) {
                console.log("response", res);
                this.setState({
                    policies: res.data.Response,
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


        const policiesList = this.state.policies ?
            this.state.policies.map((policy, index) => {
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
                <Head title={this.props.translate("privacy_title")} history={history}/>
                <section className="ftco-section doctors-list-all">
                    <div className="container">
                        {policiesList}
                    </div>
                </section>

                <Subscribe/>
            </div>
        )
    }
}

export default globalMiddleware(withTranslate(Privacy));
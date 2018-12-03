import React, {Component} from "react";
import Head from "../components/Head";
import Subscribe from "../components/Subscribe";
import {withTranslate} from "react-redux-multilingual"
import globalMiddleware from "./../hocs/globalMiddleware";


class Privacy extends Component {

    render() {

        const history = [
            {
                page: this.props.translate("home"),
                to: "/"
            }
        ]

        return (
            <div className="Privacy">
                <Head title={this.props.translate("privacy")} history={history}/>
                <section className="ftco-section doctors-list-all">
                    <div className="container">
                        <h1>Privacy Policy</h1>
                        <h6>Collecting specific information:</h6>
                        <p>We collect information from you when you register on our site, book a doctor or subscribe to
                            our newsletter.</p>
                        <p>When booking or registering on our site, as appropriate, you may be asked to enter your name,
                            e-mail address, mailing address or phone number.</p>
                        <h6>Disclosure Regarding Google Display Advertising:</h6>
                        <p>We implement Google Analytics features that use Display Advertising information for Google
                            Analytics Demographics and Interest Reporting.</p>
                        <p>You can opt-out of Google Analytics for Display Advertising, to prevent your data from being
                            used by Google Analytics, by going to the Google Analytics opt-out page. (Here's the
                            link:https://tools.google.com/dlpage/gaoptout/"</p>

                        <p>We, along with third-party vendors (including Google), use first-party cookies (such as the
                            Google Analytics cookies) and third-party cookies (such as the DoubleClick cookies) to
                            report how your ad impressions, other uses of ad services, and interactions with these ad
                            impressions and ad services are related to visits to our website. You can read more about
                            the cookies used by Google Analytics advertising features, by going to the Google Analytics
                            Privacy Policy page. (Here's the link:
                            https://support.google.com/analytics/answer/2700409?hl=en)</p>

                        <h6>Specific uses of information</h6>
                        <p>Any of the information we collect from you may be used in one of the following ways:</p>

                        <p>To personalize your experience (your information helps us to better respond to your
                            individual needs)</p>

                        <p>To process transactions(Your information, whether public or private, will not be sold,
                        exchanged, transferred, or given to any other company for any reason whatsoever, without
                        your consent, other than for the express purpose of delivering the purchased product or
                            service requested).</p>

                        <p>To send periodic emails(The email address you provide for booking, may be used to send you
                        information and updates pertaining to your booking, in addition to receiving occasional
                            company news, updates, related product or service information, etc.)</p>

                        <p>Note: If at any time you would like to unsubscribe from receiving future emails, we include
                            detailed unsubscribe instructions at the bottom of each email.</p>

                        <h6>Protecting Your Information</h6>
                        We implement a variety of security measures to maintain the safety of your personal
                        information when you place a booking or enter, submit, or access your personal information.

                        We offer the use of a secure server. All supplied sensitive/credit information is
                        transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment
                        gateway providers database only to be accessible by those authorized with special access
                        rights to such systems, and are required to keep the information confidential.

                        After a transaction, your private information (credit cards, social security numbers,
                        financials, etc.) will not be stored on our servers.

                        <h6>Cookie Usage Policy</h6>
                        Cookies are small files that a site or its service provider transfers to your computer’s
                        hard drive through your Web browser (if you allow) that enables the sites or service
                        providers systems to recognize your browser and capture and remember certain information

                        If you prefer, you can choose to have your computer warn you each time a cookie is being
                        sent, or you can choose to turn off all cookies via your browser settings. Like most
                        websites, if you turn your cookies off, some of our services may not function properly.

                        <h6>No disclosure of information to other parties</h6>
                        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable
                        information. This does not include trusted third parties who assist us in operating our
                        website, conducting our business, or servicing you, so long as those parties agree to keep
                        this information confidential. We may also release your information when we believe release
                        is appropriate to comply with the law, enforce our site policies, or protect ours or others
                        rights, property, or safety. However, non-personally identifiable visitor information may be
                        provided to other parties for marketing, advertising, or other uses.
                        All credit/debit cards details and personally identifiable information will NOT be stored,
                        sold, shared, rented or leased to any third parties.
                        The Website Policies and Terms & Conditions may be changed or updated occasionally to meet
                        the requirements and standards. Therefore the Customers’ are encouraged to frequently visit
                        these sections in order to be updated about the changes on the website. Modifications will
                        be effective on the day they are posted.

                        <h6>Third party links</h6>
                        We may include or offer third party products or services on our website. These third party
                        sites have separate and independent privacy policies. We therefore have no responsibility or
                        liability for the content and activities of these linked sites. Nonetheless, we seek to
                        protect the integrity of our site and welcome any feedback about these sites.

                        <h6>Terms and Conditions</h6>
                        Please also visit our Terms and Conditions section establishing the use, disclaimers, and
                        limitations of liability governing the use of our website at www.vezeeta.com

                        <h6>Your Consent</h6>
                        By using our site, you consent to our privacy policy.

                        <h6>Contacting Us</h6>
                        If there are any questions regarding this privacy policy you may contact us using the email
                        info@drbridge.com.


                        Thanks

                    </div>
                </section>

                <Subscribe/>
            </div>
        )
    }
}

export default globalMiddleware(withTranslate(Privacy));
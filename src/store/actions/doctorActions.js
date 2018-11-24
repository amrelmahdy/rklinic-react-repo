import axios from "axios";
import { getDoctorsLink, getDoctorDetailsLink } from "./../../config";


export const getDoctorsList = () => {
    return (dispatch, getState) => {
        axios.post(getDoctorsLink).then(res => {
            if (res.data.status !== true) {
                const doctors = res.data.Response;
                dispatch({
                    type: "GET_DOCTORS_LIST",
                    payload: doctors
                })
            }
        }).catch(err => {
            console.log(err)
        });

    }
};


export const getDoctorDetails = (id) => {
    return (dispatch, getState) => {
        axios.post(getDoctorDetailsLink, { doctor_id: id }).then(res => {

            if (res.data.status !== true) {
                const doctor = res.data.Response;
                dispatch({
                    type: "GET_DOCTOR_DETAILS",
                    payload: doctor
                })
            }
        }).catch(err => {
            console.log(err)
        });

    }
};
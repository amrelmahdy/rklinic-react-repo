import axios from "axios";
import { getDoctorsLink } from "./../../config";


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
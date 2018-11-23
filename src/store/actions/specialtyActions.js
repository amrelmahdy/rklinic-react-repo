import axios from "axios";
import { getSpecialtiesLink, getSpecialtyDeatailsLink } from "./../../config";

export const getSpecialtiesList = (featured = 1) => {
    return (dispatch, getState) => {
        axios.post(getSpecialtiesLink, { featured: featured }).then(res => {
            if (res.data.status !== true) {
                const specialties = res.data.Response;
                dispatch({
                    type: "GET_SPECIALITIES_LIST",
                    payload: specialties
                })
            }
        }).catch(err => {
            console.log(err)
        });

    }
};


export const getSpecialtyDetails = (id) => {
    return (dispatch, getState) => {
        axios.post(getSpecialtyDeatailsLink, { speciality_id: id}).then(res => {
            if (res.data.Error.status === true){
                const currentSpecialty = res.data.Response;
                dispatch({
                    type: "GET_SPECIALTY_DETAILS",
                    payload: currentSpecialty
                })

                console.log(currentSpecialty);
            } else {
                // error message
            }
        }).catch(err => {
            console.log("err", err);
        })
    }
};
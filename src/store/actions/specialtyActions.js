import axios from "axios";
import {getHeader, getSpecialtiesLink, getSpecialtyDetailsLink} from "./../../config";

export const getAllSpecialtiesList = () => {
    return (dispatch, getState) => {
        axios.post(getSpecialtiesLink, { featured: 0 },{ headers: getHeader() }).then(res => {
            if (res.data.status !== true) {
                const specialties = res.data.Response;
                dispatch({
                    type: "GET_All_SPECIALITIES_LIST",
                    payload: specialties
                })
            }
        }).catch(err => {
            console.log(err)
        });

    }
};

export const getSpecialtiesList = () => {
    return (dispatch, getState) => {
        axios.post(getSpecialtiesLink, { featured: 0 }, { headers: getHeader() }).then(res => {
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
        axios.post(getSpecialtyDetailsLink, { speciality_id: id}, { headers: getHeader() }).then(res => {
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


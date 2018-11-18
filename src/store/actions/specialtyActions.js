import axios from "axios";
import { getSpecialtiesLink } from "./../../config";

export const getSpecialtiesList = () => {
    return (dispatch, getState) => {
        axios.post(getSpecialtiesLink).then(res => {
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
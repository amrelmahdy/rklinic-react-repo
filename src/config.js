import {Bone, Skeleton} from "react-loading-skeleton-placeholders";
import React from "react";

export const getDoctorsLink     = "https://rklinic-admin.com/api/site/doctors/list";
export const getSpecialtiesLink = "https://rklinic-admin.com/api/specialities/list";
export  const sendSubscribeEmail = "https://rklinic-admin.com/api/system/subscription";
export const getSpecialtyDetailsLink = "https://rklinic-admin.com/api/speciality/doctors";
export const getDoctorDetailsLink = "https://rklinic-admin.com/api/doctor/profile";


export const getHeader =  () => {
    const lang = window.localStorage.getItem('lang');
    const header = {
        lang: lang,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return header
}



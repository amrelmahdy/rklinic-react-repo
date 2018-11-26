const initState = {
    doctors: [],
    doctorsListIsLoading: true,
    current: null,

};






const doctorReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_DOCTORS_LIST":
            state = {
                ...state,
                doctors: action.payload,
                doctorsListIsLoading: false
            };
            break;

        case "GET_DOCTOR_DETAILS":
            state = {
                ...state,
                current: action.payload,
            };
            break;
        default :
            // do nothing
    }
    return state
};


export default doctorReducer
const initState = {
    doctors: [],
    doctorsListIsLoading: true
}
const doctorReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_DOCTORS_LIST":
            state = {
                ...state,
                doctors: action.payload,
                doctorsListIsLoading: false
            };
            break;
        default :
            // do nothing
    }
    return state
}


export default doctorReducer
const initState = {
    all_specialties: [],
    specialties: [],
    specialtyListIsLoading: true,
    specialtyDetailsIsLoading: true,
    current: null,
};




const specialtyReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_All_SPECIALITIES_LIST" :
            state = {
                ...state,
                all_specialties: action.payload,
            }
            break;

        case "GET_SPECIALITIES_LIST" :
            state = {
                ...state,
                specialties: action.payload,
                specialtyListIsLoading: false
            }
            break;


        case "GET_SPECIALTY_DETAILS" :
            state = {
                ...state,
                current: action.payload,
                specialtyDetailsIsLoading: false
            }
            break;

        default:
    }

    return state;
};

export default specialtyReducer
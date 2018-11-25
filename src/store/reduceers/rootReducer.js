import { combineReducers } from 'redux'
import doctorReducer from "./doctorReducer";
import specialityReducer from "./specialityReducer";
import { IntlReducer as Intl,  } from 'react-redux-multilingual'


const rootReducer = combineReducers({
    doctor: doctorReducer,
    specialty: specialityReducer,
    Intl
})

export default rootReducer



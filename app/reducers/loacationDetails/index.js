import { LOCATION_DETAILS } from "../../actions/action.type";


const initialState = {
    data:null,
    error:null
 
};

export default (state = initialState, action) => {
    
    switch (action.type) {
        case LOCATION_DETAILS:
            return {
                data:action.payload.data,
                error:null,

            }
            
            

        default:
            return state
    }
}
import { GET_COORDINATES } from "../../actions/action.type";


const initialState = {
    coordinates:[],
    error:null,
    lat:0,
    lng:0
 
};

export default (state = initialState, action) => {
    
    switch (action.type) {
        case GET_COORDINATES:
            return {
                ...state,
                coordinates:action.payload.data,
                lat:action.payload.lat,
                lng:action.payload.lng,
                error:null
              

            }
            
            

        default:
            return state
    }
}
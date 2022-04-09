import { SET_LAT_LNG } from "../action.type"


export const setLatLng = data => async dispatch => {
//   console.log(data,'data')
    dispatch({
        type: SET_LAT_LNG,
        payload:{
            lat:data.lat,
            lng:data.lng
           
        }
    })
}
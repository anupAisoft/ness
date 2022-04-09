import { GET_COORDINATES } from "../action.type"

import Axios from 'axios'
import { Base_url } from "../../key"
export const get_coordinates = () => async dispatch => {
    Axios.get( `${Base_url}/citizenapi/api/GetLocationDataByCoordinates?limit=20`)
    .then(response => {
        // console.log(response.data[0].Latitude,'gg')
        dispatch({ 
            type: GET_COORDINATES,
            payload: {
                data: response.data,
                lat:response.data[5].Latitude,
                lng:response.data[5].Longitude
            }
        })
       
    })
    .catch(error => {
        console.log(error)
    })
}
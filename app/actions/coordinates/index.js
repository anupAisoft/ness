import {GET_COORDINATES, MARKER_IS_SELECTED} from '../action.type';

import Axios from 'axios';
import {Base_url} from '../../key';
export const get_coordinates = () => async dispatch => {
  Axios.get(`${Base_url}/citizenapi/api/GetLocationDataByCoordinates?limit=30`)
    .then(response => {
      dispatch({
        type: GET_COORDINATES,
        payload: {
          data: response.data,
          lat: response.data[5].Latitude,
          lng: response.data[5].Longitude,
        },
      });
    })
    .catch(error => {
      console.log(error);
    });
};
export const marker_seleted = id => dispatch => {
  dispatch({
    type: MARKER_IS_SELECTED,
    payload: {
      id: id,
    },
  });
};

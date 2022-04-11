import {LOCATION_DETAILS} from '../action.type';

import Axios from 'axios';
import {Base_url} from '../../key';
export const get_location_details = id => async dispatch => {
  Axios.get(
    `${Base_url}/citizenapi/api/GetLocationDataByLocationID?Locationid=${id}`,
  )
    .then(response => {
      //    console.log(response)
      dispatch({
        type: LOCATION_DETAILS,
        payload: {
          data: response.data,
        },
      });
    })
    .catch(error => {
      console.log(error);
    });
};

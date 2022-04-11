import {GET_COORDINATES, MARKER_IS_SELECTED} from '../../actions/action.type';

const initialState = {
  coordinates: [],
  error: null,
  latt: 0,
  lngg: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_COORDINATES:
      let data1 = action.payload.data.map(item => {
        return {...item, isChecked: false};
      });
      // console.log(data1, 'data1');
      return {
        ...state,
        coordinates: data1,
        latt: action.payload.lat,
        lngg: action.payload.lng,
        error: null,
      };
    case MARKER_IS_SELECTED:
      let marker = state.coordinates.map(item => {
        let itm = {...item, isChecked: false};
        return itm;
      });
      marker[action.payload.id].isChecked = true;

      return {
        ...state,
        coordinates: marker,
        latt: 0,
        lngg: 0,
        error: null,
      };

    default:
      return state;
  }
};

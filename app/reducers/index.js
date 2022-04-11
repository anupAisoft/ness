import {combineReducers} from 'redux';
import selectList from './selectList';
import setLatLang from './setLatLang';
import coordinates from './coordinates';
import location_details from './loacationDetails';
// import location_details from './loacationDetails'
location_details;

const rootReducer = combineReducers({
  setLatLang,
  selectList,
  coordinates,
  location_details,
});
export default rootReducer;

import {combineReducers} from 'redux'
import selectList from './selectList'
import setLatLang  from './setLatLang'
import coordinates from './coordinates'

 const rootReducer= combineReducers({ 
     setLatLang,
    selectList,
    coordinates
})
export default rootReducer

import { LOAD_LIST,SELECT_ALL,CLEAR_ALL,IS_SELECTED } from "./action.type"
export const getlist = list => async dispatch => {
  
    dispatch({
        type: LOAD_LIST,
        payload:{
            data:list,
            checked:false,
            seletedlist:[]
        }
    })
}
export const select_all = list => async dispatch => {
   
    dispatch({
        type: SELECT_ALL,
        payload:{
            data:list,
            checked:true,
            seletedlist:[]
        }
       
    })
}

export const clear_all = list => async dispatch => {
   
    dispatch({
        type: CLEAR_ALL,
        payload:{
            data:list,
            checked:false,
            seletedlist:[]
        }
       
    })
}
export const is_selected = id => async dispatch => {
   
    dispatch({
        type: IS_SELECTED,
        payload:{
           id:id
        }
       
    })
}
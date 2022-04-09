import { LOAD_LIST,SELECT_ALL,CLEAR_ALL ,IS_SELECTED} from "../actions/action.type";

const initialState = {
    checked:false,
 list:[],
 checkList:[]
};

export default (state = initialState, action) => {
    
    switch (action.type) {
        case LOAD_LIST:
            return {
                ...state,
                checked:false,
                list:action.payload.data,
                checkList:[]

            }
            case SELECT_ALL:
               
             let data =   action.payload.data.map(item => {
                        return {...item, isChecked:true};
                      });
                const listdata=data.filter(item => item.isChecked)
                 return {
                     ...state,
                     checked:true,
                    list:data,
                    checkList:listdata
    
                }
            case CLEAR_ALL:
                let data1 =   action.payload.data.map(item => {
                    return {...item, isChecked:false};
                  });
                
             return {
                 ...state,
                 checked:false,
                list:data1,
                checkList:[]

            }
            case IS_SELECTED:
                // const item=[...state]
              
                let d= state.list.map(item => {
                      if (action.payload.id === item.id) {
                    item.isChecked= !item.isChecked
                     }
                       return item;
                     });
                let checkData;
               const seletedData= d.filter(item => item.isChecked);
              
               if (seletedData.length==state.list.length) {
                checkData=true
               }else{
                checkData=false
               }
                
             return {
                 ...state,
                 checked:checkData,
                list:d,
                checkList:d.filter(item => item.isChecked)

            }

        default:
            return state
    }
}
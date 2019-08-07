const initialState = {
  list: [],

 };

const users = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_USER':    
      return {
        ...state,     // give all the props of the old state
        list : state.list.concat(action.payLoad.inputObj),
        fetching : false
      }

    case 'DELETE_USER':    
      let tempD = [...state.list]
      tempD = tempD.filter(user => user._id !== action.payLoad.user._id);
      return {
        ...state,     
        list : tempD,
        fetching : false
      }

    case 'UPDATE_USER':    
    
      // const tempU = state.list ;  // (This just create a new identifier refering to the same object)
      let tempU = [...state.list]  //( This creates New Object )
      tempU[state.idToUpdate] = action.payLoad.updatedObj;
      console.log(" TEMPU     ",tempU)
      
      return {
        ...state,     
        list : tempU,
        objToUpdate : {},
        idToUpdate : 0,
        up : false,
        fetching : false
      }

    case 'UPDATE_PRO':    
      return {
        ...state,
        objToUpdate : action.payLoad.objToUpdate,
        idToUpdate : action.payLoad.index,
        up : true
      }  
    
    case 'START_API_WORK':    
      return {
        ...state,
        fetching : true
      }

    case 'GET_ALL_USERS':    
      let tempGet = [...state.list]
      let counter = 0
      action.payLoad.usersArr.map( (usr) => {
        tempGet[counter] = usr;
        counter = counter + 1 ;
      })
      return {
        ...state,
        list : tempGet,        
        fetching : false
      }

    default:
      return state
  }
}
 
export default users







// case 'UPDATE_USER':    
//       let tempU = state.list ;
//       tempU[state.idToUpdate] = action.payLoad.text
//       console.log(" TEMPU     ",tempU)
//       return {
//         ...state,     
//         list : tempU,
//         preName : '',
//         idToUpdate : 0,
//         up : false
//       }
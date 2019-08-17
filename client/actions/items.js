import Axios from 'axios'
import {notification} from 'antd';

export const addItem = inputObj => (dispatch) => {
    console.log('Here Action recieves the values from  FrontEnd  :::', inputObj)
    dispatch({
        type : 'ADD_ITEM_REQUEST'
    })
    Axios({
        method : "POST",
        url : 'http://localhost:3002/api/v1/addItem',
        data :inputObj  
    })
    .then(function ({data}) {
        console.log(" This is ADDITEM Axios Response " , data)
        const { item, token } = data ;        
        
        notification.success({
          message: 'Item',
          description: 'Item Added Successfully !'
        });
        return dispatch({
            type : 'ADD_ITEM_SUCCESS',
            payLoad : item
        });
    })
    .catch( (error) => {
        const { data } = error.response.data;
        notification.error({
          message: 'Register User',
          description: data
        });
    
        dispatch({ type: 'ADD_ITEM_FAILED' });
    });
}
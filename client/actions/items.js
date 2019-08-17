import Axios from 'axios'
import {notification} from 'antd';

export const addItem = inputObj => (dispatch) => {
    console.log('Here Action recieves the values from  FrontEnd  :::', inputObj)
    dispatch({
        type : 'ADD_ITEM_REQUEST'
    })
    Axios({
        method : "POST",
        url : 'http://localhost:3002/api/v1/items/addItem',
        data :inputObj  
    })
    .then(function ({config}) {
        // console.log(" This is ADDITEM Axios Response " , config)
        const { data } = config ;    
        const item = JSON.parse(data)    
        
        notification.success({
          message: 'Item',
          description: 'Item Added Successfully !'
        });
        return dispatch({
            type : 'ADD_ITEM_SUCCESS',
            payload : item 
        });
    })
    .catch( (error) => {
        // const { data } = error.response.data;
        notification.error({
          message: 'Register User',
          description: "Hello its Error"
        });
    
        dispatch({ type: 'ADD_ITEM_FAILED' });
    });
}




export const getAllItems = () => (dispatch) => {
    dispatch({
        type : 'GET_ALL_ITEMS_REQUEST'
    })
    Axios({
        method : "GET",
        url : 'http://localhost:3002/api/v1/items/allItems',
        //http://localhost:3002/api/v1/items/allItems
    })
    .then(function ({config}) {
        const {data} = config;
        console.log(" This is ADDITEM Axios Response " , data)
        const items = JSON.parse(data)    
        console.log(" This is all Items " , items)
        
        notification.success({
          message: 'Item',
          description: 'Item Added Successfully !'
        });
        return dispatch({
            type : 'GET_ALL_ITEMS_SUCCESS',
            payload : items 
        });
    })
    .catch( (error) => {
        // const { data } = error.response.data;
        notification.error({
          message: 'All Items',
          description: "Hello its Error"
        });
    
        dispatch({ type: 'GET_ALL_ITEMS_FAILED' });
    });
}

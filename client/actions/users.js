//import {ADD_USER , DELETE_USER , UPDATE_USER , UPDATE_PRO , START_API_WORK , GET_ALL_USERS } from './actionType'
import Axios from 'axios'



//////       Get All User     ///////

export const getusers = () => (dispatch) => {
    dispatch({
        type : 'START_API_WORK'
    })
    Axios({
        method : "GET",
        url : 'http://localhost:3002/testGet'
    })
    .then ( function (response) {
        console.log(response);
        return dispatch ({
            type : 'GET_ALL_USERS',
            payLoad : {
                usersArr : response.data 
            }
        })
    })
    .catch( function (error) {
        console.error( " Error : " , error );
    })
    
}



//////       Add User     ///////

export const adduser = inputObj => (dispatch) => {
    console.log('Here Action recieves the values from  FrontEnd  :::', inputObj)
    dispatch({
        type : 'START_API_WORK'
    })
    // Axios({
    //     method : "POST",
    //     url : 'http://localhost:3002/api/v1/routeAddUser',
    //     data :{
    //         inputObj
    //     }
    // })
    // .then(function (response) {
    //     console.log(" This is ADDUSER Axios Response " , response)
    //     return dispatch({
    //         type : 'ADD_USER',
    //         payLoad : {
    //             inputObj
    //         }
    //     })
    // })
    // .catch( function (error){
    //     console.error("Error : ",error)
    // })
}



//////       Delete User     ///////

export const deleteuser = user => (dispatch) => {
    dispatch({
        type : 'START_API_WORK'
    })
    Axios({
        method : "DELETE",
        url : 'http://localhost:3002/testDel',
        data :{
            user
        }
    })
    .then(function (response) {
        console.log(" This is ADDUSER Axios Response " , response)
        return dispatch({
            type : 'DELETE_USER',
            payLoad : {
                user
            }
        })
    })
    .catch( function (error){
        console.error("Error : ",error)
    })
}  



//////       Update User     ///////

export const updateuser = ( objToUpdate , updatedObj ) => (dispatch) => {
    dispatch({
        type : 'START_API_WORK'
    })
    Axios({
        method : "PUT",
        url : 'http://localhost:3002/testPut',
        data :{
            updatedObj,
            objToUpdate
        }
    })
    .then(function (response) {
        console.log(" This is Update User Axios Response " , response)
        return dispatch({
            type : 'UPDATE_USER',
            payLoad : {
                updatedObj
            }
        })
    })
    .catch( function (error){
        console.error("Error : ",error)
    })
    
}

export const updatepro = (index , objToUpdate) =>{
    return {
        type : 'UPDATE_PRO',
        payLoad : {
            index,
            objToUpdate
        }
    }
}








// export const adduser = text =>{
//     return {
//         type : ADD_USER,
//         payLoad : {
//             text
//         }
//     }
// }

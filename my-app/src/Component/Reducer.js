/*import React, { Component } from 'react';
import { createStore,applyMiddleware } from 'redux'
import { combineReducers } from "redux"
//import { Provider } from 'react-redux'


/*const initialState = {
    count: 0
  };
*/

  /*const InitialState={count:null,
    item:[],
    loading:true,
    error:null
    }


    function reducer(state=InitialState,action){
        
              console.log("action in reducer",action.payload)
              switch(action.type){
                case "INCREMENT":
                return{
                  count:state.count+1
                };
                case "DECREMENT":
                return {
                  count:state.count-1
                };
                case "RESET":
                return {
                  count:0
                };
               case "FETCH_PRODUCTS_SUCCESS":
               
               return{
                  ...state,
                  loading:true,
                 item:action.payload
        
               };
                default:
        
                  return state;
                
        
        
              }
        
        
        
        //return state;
        
            }
        
        //create store and pass reducer as argument
        const store=createStore(reducer);
      /*  //dsipatch action using store
        console.log(store,"store")
        store.dispatch({type:"INCREMENT"});
        store.dispatch({type:"DECREMENT"});
        store.dispatch({type:"RESET"});
        store.dispatch({type:"ONCHANGE"});
        store.dispatch({type:"FETCH_PRODUCTS_SUCCESS"})
        
        */
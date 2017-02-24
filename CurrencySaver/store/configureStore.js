/**
 * Created by Михаил on 15.01.2017.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import ccyApp from '../reducers/index'
import thunkMiddleware from 'redux-thunk'
import { routerStateReducer, reduxReactRouter } from 'redux-react-router';

    if (module.hot) {
       module.hot.accept ( '../reducers', () =>  {
                   const nextRootReducer = require ('../reducers');
               store.replaceReducer(nextRootReducer)
           }


       )
    }
export default function createAppStore(initialState) {
    const store = createStore(ccyApp, initialState,applyMiddleware(thunkMiddleware));
return store
}
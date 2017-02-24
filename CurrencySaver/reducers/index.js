/**
 * Created by Михаил on 15.01.2017.
 */
import * as types from '../actions/actionTypes';
import { routerStateReducer } from 'redux-react-router';
import {combineReducers} from 'redux'

const initialState = {
    currencieslist: [
        {
            id:'No data',
            name:'No data',
            rate:'No data'
        }],
    hideCurrencies: [
        {
            id: 'No data',
            name: 'No data',
            rate: 'No data'
        }
]

};

function addCurrency(state=initialState,action = null)  {
      switch (action.type) {
          case types.ADD_CCY:
              return Object.assign({},   state, {currencieslist: action.data});
          case types.DEL_CCY:
              return Object.assign({}, state, {currencieslist: action.data});
          default:
              return state;
      }

}
function exampleReducer(state=initialState,action = null) {
    switch (action.type) {
        case types.RECV_ERROR:
            return Object.assign({}, state, {currencieslist: action.data});
        case types.RECV_DATA:
            return Object.assign({}, state, {currencieslist: action.viewCurrencies, hideCurrencies: action.data});
        case types.REQ_DATA:
            return Object.assign({}, state);
        case types.GET_CCY_DATE:
            return Object.assign({}, state, {currencieslist: action.data});
        case types.ADD_CCY:
            return Object.assign({}, state, {currencieslist: action.data});
        default:
            return state;
    }
}
const ccyApp = combineReducers({
    addCurrency,
    exampleReducer
});
export default ccyApp

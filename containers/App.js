/**
 * Created by Михаил on 28.01.2017.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Provider } from 'react-redux';
import CurrencyListApp from './CurrencyListApp';
import configureStore from '../store/configureStore'
import {fetchData} from '../actions/actions';
export const store = configureStore();
var moment = require('moment');
var temp_dt = new Date();
var currentDate = moment(temp_dt).format('DD/MM/YYYY');
const ht = 'https://www.cbr.ru/scripts/XML_daily.asp?date_req=';
store.dispatch(fetchData(ht+currentDate));
export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <div>
                        <CurrencyListApp/>
                    </div>
                </Provider>
            </div>
        );
    }
}
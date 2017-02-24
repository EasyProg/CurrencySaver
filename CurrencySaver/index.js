/**
 * Created by Михаил on 15.01.2017.
 */


import 'babel-polyfill'
import {reduxReactRouter, routerStateReducer, ReduxRouter, browserHistory } from 'redux-react-router';
import React from 'react'
import moment from 'moment'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import Date from './components/DateCurrency'
//var moment = require('moment');
render (<App/>,document.getElementById('root'))
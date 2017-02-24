/**
 * Created by Михаил on 19.01.2017.
 */


import React,{Component,PropTypes}  from 'react'
import {connect} from 'react-redux'
import InputCurrency from '../components/InputCurrency'
import CurrenciesList from '../components/CurrenciesList'
import {getCcyDate,fetchData} from '../actions/actions';
import {bindActionCreators} from 'redux';
var moment = require('moment');
var DatePicker = require('react-bootstrap-date-picker');
@connect(state => ({
    currencieslist: state.exampleReducer.currencieslist,
    hideCurrencies: state.exampleReducer.hideCurrencies
}
)
)
// @connect(
//     dispatch => bindActionCreators({filterData}, dispatch)
// )
@connect(
    dispatch => bindActionCreators({getCcyDate,fetchData}, dispatch)
)
export default class CurrencyListApp extends Component {
    constructor(props){
        super(props);
    }
    ChangeDate (e) {
        var nextDate=moment(e).format('DD/MM/YYYY');
        this.props.dispatch(fetchData('https://www.cbr.ru/scripts/XML_daily.asp?date_req=' + nextDate,this.props.currencieslist));
        this.props.dispatch(getCcyDate(this.props.currencieslist,this.props.hideCurrencies));
    };
    render() {
        return  (
                <div>
                    <label for="dt">
                        Дата курса:
                        <DatePicker id="dt" onChange={e => this.ChangeDate(e)}/>
                    </label>
                <CurrenciesList currencieslist={this.props.currencieslist}/>
                <InputCurrency  currencieslist={this.props.hideCurrencies} viewcurrencies={this.props.currencieslist}/>
                </div>
                )
    }
}
/**
 * Created by Михаил on 16.01.2017.
 */
import React, {Component,PropTypes} from 'react';
import Currency from './Currency';
import {connect} from 'react-redux';
//import '../css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
var _ = require('lodash');
export default class CurrenciesList extends Component{
    static propTypes = {
        currencieslist:PropTypes.array.isRequired
    }
    render() {
        //const data = this.props.currencies;
        //const {currency} = this.props.CurrenciesList;
        return (
            <div className='container'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rate</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.currencieslist.map(currency => {
                        return (
                            <Currency id={currency.id} name={currency.name} rate={currency.rate}  index = {currency.index}/>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
};
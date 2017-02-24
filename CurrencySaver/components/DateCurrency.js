/**
 * Created by Михаил on 16.01.2017.
 */
import React, {Component} from 'react'
import {fetchData} from '../actions/actions';
import store from '../containers/App';
import {connect} from 'react-redux';
class DateCurrency extends Component {
    @connect(state => ({
        currencieslist: state.exampleReducer.currencieslist
    }))
    render() {
            return (
                <label for="dt">
                    Дата курса:
                    <input className="input-group" type="date" id="dt" onChange={ChangeDate}/>
                </label>
            )
    }

}
export default DateCurrency;

/**
 * Created by Михаил on 20.01.2017.
 */
import React, { findDOMNode, Component, PropTypes } from 'react';
import {addCurrency} from '../actions/actions';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
@connect(
    dispatch => bindActionCreators({addCurrency}, dispatch)
)
export default class InputCurrency extends Component {
    static propTypes = {
        currencieslist:PropTypes.array.isRequired,
        viewcurrencies:PropTypes.array.isRequired
    }
    handleClick(e) {
        const node = findDOMNode(this.refs.input);
        const text = node.value.trim().toUpperCase();
        this.props.dispatch(addCurrency(this.props.currencieslist,this.props.viewcurrencies,text));
        node.value = '';
    }
    render () {


        return (
        <form className="form-inline">
            <div id="forInput" className="form-group">
               <input id="msg" type="text" className="form-control" name="msg" placeholder="New CCY" ref="input"/>
            </div>
            <div className="form-group">
            <input type= "button" className="btn btn-primary" onClick={e=>this.handleClick(e)} value="Добавить валюту"></input>
            </div>
        </form>

        )
    }
}
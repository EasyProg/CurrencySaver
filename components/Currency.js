/**
 * Created by Михаил on 16.01.2017.
 */
import React, {Component,PropTypes} from 'react';
import {deleteCcy} from '../actions/actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
@connect(state => ({
            currencieslist: state.exampleReducer.currencieslist
        }
    )
)
@connect(
    dispatch => bindActionCreators({deleteCcy}, dispatch)
)
export default class Currency  extends Component{
    static propTypes = {
        id  : PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        rate: PropTypes.string.isRequired,
        index: PropTypes.string.isRequired
    }
    handleClick(e) {
        console.log("Click");
        this.props.dispatch(deleteCcy(this.props.currencieslist,this.props.index));
    }
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.rate}</td>
                <td><input type = "button" value="X" onClick={e=>this.handleClick(e)}></input></td>
            </tr>
        )
    }

};
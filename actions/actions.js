/**
 * Created by Михаил on 15.01.2017.
 */
import React, { Component } from 'react';
import * as types from './actionTypes';
import { pushState } from 'redux-react-router';
import axios from 'axios';
export function filterData(obj,value) {
        var newObj= [] ;
    var Curr = obj['data']===undefined?obj:obj['data'];
    var lengthdata = Curr.length;
    if (Array.isArray(value))
    {
            var lengthArr = value.length;
            for (var i = 0; i < lengthdata; i++) {
                for (var j = 0; j < lengthArr; j++) {
                    if (Curr[i]['name'] === value[j]) {
                        newObj.push(Curr[i]);
                    }
                }
            }
        }
        else {
        for (var i = 0; i < lengthdata; i++) {
            if (Curr[i]['name'] === value) newObj.push(Curr[i]);
        }
        }
    console.log(newObj);
    return newObj
}
export function getCcyDate (viewArr = [{id:'0',name:'none',rate:'none'}],
                            hideArr = [{id:'0',name:'none',rate:'none'}]) {

        let arr1 = viewArr;
        let arr2 = hideArr;
        let result = [];
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                if (arr1[i]['name'] === arr2[j]['name']) {
                   arr1[i]['rate'] = arr2[j]['rate'];
                   console.log(arr2[j]['rate']);
                }
        }}
        console.log(arr1);
        return (
            {
                type: types.GET_CCY_DATE,
                data: arr1
            }  )
}
export function deleteCcy(viewArr,ccyId)  {
var Currencies = viewArr.splice(ccyId,1);
console.log('sdsdsdsd');
    return {type: types.DEL_CCY,
            data:Currencies
            }

}

    function requestData() {
        return {type: types.REQ_DATA}
    };

    function receiveData(xml,objArr = []) {
        console.log(objArr.length);
        var parser = require('xml2js').parseString;
        var Currencies = [];
        parser(xml,function(err,result) {
            var arr=result['ValCurs']['Valute'];
            arr.forEach(
                function(e,i) {
                    Currencies.push({id:i,
                                    name:e['CharCode'][0],
                                    rate:e['Value'][0]
                    });
                }

            )
            });
        return {

            type: types.RECV_DATA,
            data: Currencies,
            viewCurrencies:objArr.length === 0 ?filterData(Currencies,['USD','EUR']):objArr

        }
    };

    function receiveError(xml) {
        return {
            type: <types className="RECV_ERROR"></types>,
            data: xml
        }
    };
    export function addCurrency(hiddenArr,currArr,value) {
    var filter  = filterData(hiddenArr,value);
    var t = filter[0];
    var isFound = false;
    for (var i=0;i<currArr.length;i++) {
        if (currArr[i]['name'] === value )
        {
            isFound = true;
        }
    }
    return {type: types.ADD_CCY,
            data: isFound?currArr:currArr.concat(t)};
     }
    export function fetchData(url,objArr = []) {
        var b = objArr;
        return function (dispatch) {
            dispatch(requestData());
            return axios( {
                crossDomain: true,
                mode:'no-cors',
                url: url,
                timeout: 20000,
                method: 'get',
                responseType: 'xml',
                transformRequest:[(data)=>JSON.stringify(data,data)],
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Credentials':true,
                    'Access-Control-Allow-Methods':'PUT, GET, POST, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers':'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token'
                }}
            )
                .then(function (response) {
                    dispatch(receiveData(response.data,b));
                })
                .catch(function (response) {
                   dispatch(receiveError(response.data));
             })
        }

    //};
};
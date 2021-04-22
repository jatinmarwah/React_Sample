import * as React from "react";
import { useState, useEffect } from "react";
import * as _ from 'lodash';
import IgistResults from './gistResults';
import { sanitizeResponse } from '../../utils';
import { gitBaseUrl, defaultMsg } from '../../constants';

const Iusers = (props: any): JSX.Element => {
    const baseObj = {

    };
    const [initialBState, BSubmit] = useState("Get User Gists");
    const [inputValue, inputSubmitted] = useState('');
    const [gistUserData, setGistResData] = useState(baseObj);
    
    let submitUser = (e: any)=> {
        e.preventDefaults();
    };

    let getUserList = () => {
        const url = gitBaseUrl + inputValue + '/gists';
        //Can be part of a common ajax utility
        async function fetchAsync(getUrl: RequestInfo) {
            let response = await fetch(getUrl, { 
                method: 'GET' });
            let data = await response.json();
            return data;
        };

        fetchAsync(url).then( data => {
            setGistResData(sanitizeResponse(data));
        });

    };

    return (
        <div>
            {/* <form onSubmit={submitUser}> */}
                <label>Enter Username: </label>
                <input type='text' placeholder='without @' onChange={event => inputSubmitted(event.target.value)}></input>
                <button onClick={() => getUserList()}>{initialBState}</button>
            {/* </form> */}
                <IgistResults dataMap={gistUserData} ></IgistResults>
        </div>
    );
}
  
export default Iusers;
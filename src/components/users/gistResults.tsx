import * as React from 'react';
import { useState, useEffect } from "react";
import * as _ from 'lodash';
import { defaultMsg } from '../../constants';
import { sanitizeResponse, fetchAsync } from '../../utils';

const IgistResults = (props: any): JSX.Element => {
    const { dataMap } = props;

    //Table structure is complaining about white spaces (strange react dom error), so all in one line
    let tableData = dataMap.length > 0 ? (
        <div id="renderList">
            <span>Total Gists Returned: {dataMap.length}</span>
            <table>
                <tbody>
                    <tr>
                        <th>Number of Files</th>
                        <th>Tag/Badge</th>
                        <th>Gist Link</th>
                        <th>Fork Details</th>
                    </tr>
                    {dataMap.map((value:any,idx:number)=>{return(<ITableRowResults key={idx} rowData={value} gistFile={value.files} />)})}
                </tbody>
            </table>
        </div>
    ): <div className='alert'>{ defaultMsg }</div>;

    return _.isArray(dataMap) ? tableData : null;
}

const ITableRowResults = (props: any): JSX.Element => {
    const { gistFile, rowData} = props;
    const [forkValue, forkRequest] = useState([{loading: true}]);
    fetchAsync(rowData.forks_url).then( data => {
        //console.log(data);
        forkRequest(forkDataParsing(data));
    });

    return(
        <tr>
            <td>
                {_.size(gistFile)}
            </td>
            <td>{extractTags(gistFile)}</td>
            <td>
                <a href={rowData.html_url} target='_uniq'>{rowData.id}</a>
            </td>
            <td>
                {
                forkValue.length > 0 ? forkValue.map((dataResult:any, idx:number) => {
                    return !dataResult.loading ? (
                        <div className='user' key={idx}>
                            <span>Username: {dataResult.userName}</span>
                            <a href={dataResult.fork_url} target="_fork">
                                <img src={dataResult.avatar} alt={dataResult.userName} width="100" height="100"/>
                            </a>
                        </div>
                    ) : 'loading...';
                }) : 'No Fork Exists'
                }
            </td>
        </tr>
        )
}

const extractTags = (val: any) => {
    let tagList = _.keys(val).map((value)=>value.split('.')[1]);
    return tagList.join(', ');
}

const forkDataParsing = (forkObjResp: any) => {
    //get latest 3 users data only
    const relevantData = forkObjResp.slice(forkObjResp.length-3, forkObjResp.length);
    const normalizedData = _.map(relevantData, (value) => {
            return {
                loading: false,
                userName: value.owner.login,
                avatar: value.owner.avatar_url,
                fork_url: value.html_url
            }
    });

    return normalizedData;
}

export default IgistResults;
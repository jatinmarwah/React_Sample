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
    const [forkValue, forkRequest] = useState('Loading...');
    const Fork = forkDataParsing(rowData.forks_url).then( data => console.log(data));
    return(
        <tr>
            <td>
                {_.size(gistFile)}
            </td>
            <td>{extractTags(gistFile)}</td>
            <td>
                <a href={rowData.html_url} target='_uniq'>{rowData.id}</a>
            </td>
            <td>{forkValue}</td>
        </tr>
        )
}

const extractTags = (val: any) => {
    let tagList = _.keys(val).map((value)=>value.split('.')[1]);
    return tagList.join(', ');
}

const forkDataParsing = (val: any) => {
    return fetchAsync(val);
}

export default IgistResults;
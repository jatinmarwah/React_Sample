import * as React from 'react';
import * as _ from 'lodash';

const IgistResults = (props: any): JSX.Element => {
    const { dataMap } = props;
    //Table structure is complaining about white spaces (strange react dom error), so all in one line
    return dataMap.length > 0 ? (
        <div id="renderList">
            <span>Total Gists Returned: {dataMap.length}</span>
            <table>
                <tbody>
                    <tr>
                        <th>Number of Files</th>
                        <th>Tag/Badge</th>
                        <th>Gist Link</th>
                    </tr>
                    {dataMap.map((value:any,idx:number)=>{return(<ITableRowResults key={idx} rowData={value} gistFile={value.files} />)})}
                </tbody>
            </table>
        </div>
    ): null;
}

const ITableRowResults = (props: any): JSX.Element => {
    const { gistFile, rowData} = props;
    return(
        <tr>
            <td>
                {_.size(gistFile)}
            </td>
            <td>{extractTags(gistFile)}</td>
            <td>
                <a href={rowData.html_url} target='_uniq'>{rowData.id}</a>
            </td>
        </tr>
        )
}

const extractTags = (val: any) => {
    let tagList = _.keys(val).map((value)=>value.split('.')[1]);
    return tagList.join(', ');
}

export default IgistResults;
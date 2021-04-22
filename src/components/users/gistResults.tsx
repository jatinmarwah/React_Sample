import * as React from 'react';
import * as _ from 'lodash';
import { useState } from 'react';
import { gitBaseUrl } from '../../constants';


const IgistResults = (props: any): JSX.Element => {
    const { dataMap } = props;
    debugger;
    return dataMap.length > 0 ? (
        <table>
            <tbody>
                { _.each(dataMap, (value: any, idx: number) => {
                    <tr key={idx}>
                        <td><a href={value.html_url} target='_uniq'>{value.id}</a></td>
                    </tr>
                    })
                };
            </tbody>
        </table>
    ): null;
}

export default IgistResults;
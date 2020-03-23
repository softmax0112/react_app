import React from 'react';
import Button from 'react-bootstrap/Button'

export interface TableDescription {
    type: string;
    value: string;
    onClick?: () => void
}

interface TableRowProps {
    rowValues: TableDescription[];
}

const TableRow: React.FunctionComponent<TableRowProps> = ({rowValues}) => {
    return (
        <tr>
            {
                rowValues.map((row, index) => (
                    row.type === 'string' ? <td key={index}>{row.value}</td>:
                                            <td key={index}><Button variant="primary" onClick={row.onClick}>{row.value}</Button></td>
                ))
            }
        </tr>
    );
}

export default TableRow;
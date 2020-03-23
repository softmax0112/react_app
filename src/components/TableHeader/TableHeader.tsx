import React from 'react';

interface TableHeaderProps {
    headerNames: string[];
}

const TableHeader: React.FunctionComponent<TableHeaderProps> = ({headerNames}) => {
    return (
        <tr>
            {
                headerNames.map((header, index) => (
                    <th key={index}>{header}</th>
                ))
            }
        </tr>
    );
}

export default TableHeader;
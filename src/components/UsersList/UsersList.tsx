import React, { useCallback } from 'react';
import { User } from '../../models/user.model';
import Table from 'react-bootstrap/Table';
import TableHeader from '../TableHeader/TableHeader';
import TableRow, { TableDescription } from '../TableRow/TableRow';

interface UsersListProps {
    users: User[];
    onEditClick: (id: string) => void
}

const UsersList: React.FunctionComponent<UsersListProps> = ({ users, onEditClick }) => {
    const headerNames: string[] = [
        '#',
        'First Name',
        'Last Name',
        'Email',
        ''
    ]

    const buildUserRowData = useCallback((user: User): TableDescription[] => {
        return [
            {
                type: 'string',
                value: user._id,
            },
            {
                type: 'string',
                value: user.firstName,
            },
            {
                type: 'string',
                value: user.lastName,
            },
            {
                type: 'string',
                value: user.email,
            },
            {
                type: 'button',
                value: 'Edit',
                onClick: () => onEditClick(user._id),
            }
        ]
    }, [onEditClick])

    return (
        <Table striped bordered hover>
            <thead>
                <TableHeader headerNames={headerNames}></TableHeader>
            </thead>
            <tbody>
                {
                    users.map(user => {
                        return (<TableRow key={user._id} rowValues={buildUserRowData(user)}></TableRow>)
                    })
                }
            </tbody>
        </Table>
    );
}

export default UsersList;
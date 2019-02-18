import * as React from 'react';
import { Link } from 'react-router-dom';

import { ListContainer } from './styles';

interface IProps {
    users: [{
        login: string
    }];
}

const UsersList = (props: IProps) => (
    <ListContainer>
        <h2>Search Results</h2>
        <ul>
            {
                props.users.map((user: { login: string }, index: number) => (
                    <li key={`user${index}`}>
                        <Link to={`/user/${user.login}`}>{user.login}</Link>
                    </li>
                ))
            }
        </ul>
    </ListContainer>
);

export default UsersList;

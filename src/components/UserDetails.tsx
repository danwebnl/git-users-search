import * as React from 'react';

import { ListContainer } from './styles';
import { IUser } from './UserPage';

interface IProps {
    user: IUser;
}

const UserDetails = ({ user }: IProps) => (
    <ListContainer>
        <ul>
            <li>
                <img src={user.avatar_url} title={user.login} style={{ width: 100 }} /></li>
            <li>
                <a href={user.html_url} target="_blank">GitHub Page</a>
            </li>
            <li>Type: {user.type}</li>
            <li>Score: {user.score}</li>
        </ul>

    </ListContainer>
);

export default UserDetails;

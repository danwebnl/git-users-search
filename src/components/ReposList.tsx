import * as React from 'react';

import { ListContainer } from './styles';
import { IRepo } from './UserPage';

interface IProps {
    repos: [IRepo];
}

const UsersList = ({ repos }: IProps) => (
    <ListContainer>

        {repos.length < 1 && (
            <h2>No Repositories Found</h2>
        )}

        {repos.length > 0 && (
            <>
                <h2>Repositories </h2>
                <ul>
                    {
                        repos.map((repo: IRepo, index: number) => (
                            <li key={`repo${index}`}>
                                <a href={repo.html_url} target="_blank">{repo.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </>
        )}

    </ListContainer>
);

export default UsersList;

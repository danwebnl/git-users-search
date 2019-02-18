import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { MainContainer, ListContainer, BackButtonContainer, Error } from './styles';
import { getRepos } from '../store/actions/index';
import UserDetails from './UserDetails';
import ReposList from './ReposList';

export interface IUser {
    avatar_url: string;
    html_url: string;
    type: string;
    score: string;
    login: string;
}

export interface IRepo {
    name: string;
    html_url: string;
}

interface IProps {
    user: IUser;
    userLogin: string;
    repos: [IRepo];
    errorMessageRepos: string;
}

class UserPage extends React.Component<IProps, {}> {

    constructor(props: any) {
        super(props);

        const { onGetRepos, user } = props;
        onGetRepos(user.repos_url);
    }

    render() {
        const { user, userLogin, repos, errorMessageRepos } = this.props;

        return (
            <MainContainer>
                <h1>Acount: {userLogin}</h1>

                <BackButtonContainer>
                    <Link to="/">&laquo; Back</Link>
                </BackButtonContainer>

                <UserDetails user={user} />

                {errorMessageRepos && (
                    <Error>{errorMessageRepos}</Error>
                )}

                {repos && (
                    <ReposList repos={repos} />
                )}

            </MainContainer>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        user: state.users.users.find((user: any) => user.login === ownProps.match.params.login),
        userLogin: ownProps.match.params.login,
        repos: state.users.repos,
        errorMessageRepos: state.users.errorMessageRepos
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onGetRepos: (url: string) => dispatch(getRepos(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

import * as React from 'react';
import { connect } from 'react-redux';

import UsersList from './UsersList';
import { addUsers, reset, displayLoader } from '../store/actions/index';
import { MainContainer, Form, FormSubmitContainer, Error, Loading } from './styles';

interface IProps {
    onAddUsers: (searchValue: string) => void;
    onReset: () => void;
    onDisplayLoader: () => void;
    users: [{
        login: string
    }];
    totalCount: number;
    errorMessage: string;
    displayedLoader: boolean;
}

class HomePage extends React.Component<IProps, { searchValue: string }> {

    constructor(props: any) {
        super(props);

        this.state = {
            searchValue: ''
        };
    }

    handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ searchValue: event.target.value });
    }

    handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if (this.state.searchValue.trim() === '') {
            return;
        }

        const { onAddUsers, onDisplayLoader, onReset } = this.props;
        onReset();
        onDisplayLoader();
        onAddUsers(this.state.searchValue);
    }

    handleReset = (): void => {

        this.setState({
            searchValue: ''
        });

        const { onReset } = this.props;
        onReset();
    }

    render() {
        const { users, totalCount, errorMessage, displayedLoader } = this.props;

        return (
            <MainContainer>
                <h1>Git Users Search</h1>

                <Form onSubmit={this.handleSubmit} method="POST">
                    <input
                        type="text"
                        name="name"
                        placeholder="Insert name here..."
                        value={this.state.searchValue}
                        onChange={this.handleNameChange}
                    />
                    <FormSubmitContainer>
                        <button type="submit" id="submitButton">Search</button>
                        <button type="button" onClick={this.handleReset}>Reset</button>
                    </FormSubmitContainer>
                </Form>

                {errorMessage && (
                    <Error>{errorMessage}</Error>
                )}

                {displayedLoader && (
                    <Loading>Loading...</Loading>
                )}

                {totalCount === 0 && (
                    <h2>No results.</h2>
                )}

                {totalCount > 0 && (
                    <UsersList users={users} />
                )}
            </MainContainer >
        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        users: state.users.users,
        selectedUser: state.users.selectedUser,
        totalCount: state.users.totalCount,
        errorMessage: state.users.errorMessage,
        displayedLoader: state.users.displayedLoader
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddUsers: (searchValue: string) => dispatch(addUsers(searchValue)),
        onReset: () => dispatch(reset()),
        onDisplayLoader: () => dispatch(displayLoader())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

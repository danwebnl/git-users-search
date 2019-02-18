import { ADD_USERS, RESET, ADD_ERROR, DISPLAY_LOADER, GET_REPOS, ADD_ERROR_REPOS } from '../actions/actionTypes';

interface IState {
    users: any[];
    totalCount: number;
    selectedUser: string;
    displayedLoader: boolean;
    errorMessage: string;
    repos: any[];
    errorMessageRepos: string;
}

const initialState: IState = {
    users: [],
    totalCount: null,
    selectedUser: null,
    displayedLoader: false,
    errorMessage: null,
    repos: null,
    errorMessageRepos: null
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_USERS:
            return {
                users: action.users,
                totalCount: action.totalCount,
                displayedLoader: false
            };

        case RESET:
            return {
                ...state,
                users: [],
                totalCount: null,
                selectedUser: null,
                errorMessage: null,
                errorMessageRepos: null,
                repos: null
            };

        case ADD_ERROR:
            return {
                errorMessage: action.errorMessage
            };

        case GET_REPOS:
            return {
                ...state,
                repos: action.repos,
                displayedLoader: false
            };

        case ADD_ERROR_REPOS:
            return {
                ...state,
                errorMessageRepos: action.errorMessage
            };

        case DISPLAY_LOADER:
            return {
                ...state,
                displayedLoader: true
            };

        default:
            return state;
    }
};

export default reducer;

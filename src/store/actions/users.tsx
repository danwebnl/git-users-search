import axios from 'axios';
import { ADD_USERS, RESET, ADD_ERROR, DISPLAY_LOADER, GET_REPOS, ADD_ERROR_REPOS } from './actionTypes';

const API = 'https://api.github.com/search/users?q=';

export const addUsers = (searchValue: string) => (dispatch: any) => {
    axios
        .get(API + searchValue)
        .then((res: any) => dispatch({
            type: ADD_USERS,
            users: res.data.items,
            totalCount: res.data.total_count
        }))
        .catch((e) => {
            const { request, data } = e.response;
            dispatch({
                type: ADD_ERROR,
                errorMessage: `${request.status} - ${request.statusText}; ${data.message}`
            });
        });
};

export const reset = () => {
    return {
        type: RESET
    };
};

export const displayLoader = () => {
    return {
        type: DISPLAY_LOADER
    };
};

export const getRepos = (url: string) => (dispatch: any) => {
    axios
        .get(url)
        .then((res: any) => dispatch({
            type: GET_REPOS,
            repos: res.data
        }))
        .catch((e) => {
            const { request, data } = e.response;
            dispatch({
                type: ADD_ERROR_REPOS,
                errorMessage: `Cannot retrieve repositories; ${request.status} - ${request.statusText}; ${data.message}`
            });
        });
};

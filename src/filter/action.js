import {SET_FILTER} from './actionTypes';
// import {FilterTypes} from '../constants';

export const setFilter = (filterType) => ({
    type: SET_FILTER,
    filter: filterType
})
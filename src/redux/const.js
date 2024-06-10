export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const ADD_INCOME = "ADD_INCOME";
export const DELETE_INCOME = "DELETE_INCOME";
export const UPDATE_INCOME = "UPDATE_INCOME";
export const LOAD_INCOME = "LOAD_INCOME";
export const SORTING='SORTING'
export const FILTER='FILTER'
export const SORTING_EXPENSE = "SORTING_EXPENSE";
export const FILTER_EXPENSE = "FILTER_EXPENSE";
export const ADD_EXPENSE = "ADD_EXPENSE";
export const LOAD_EXPENSE = "LOAD_EXPENSE";
export const ADD_SAVING = "ADD_SAVING";
export const LOAD_SAVING = "LOAD_SAVING";
export const FILTER_SAVING = "FILTER_SAVING";
export const SORT_SAVING = "SORT_SAVING";

export const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
}
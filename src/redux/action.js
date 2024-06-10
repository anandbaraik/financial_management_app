import axios from "axios";
import { ADD_EXPENSE, ADD_INCOME, ADD_SAVING, ERROR, LOADING, LOAD_EXPENSE, LOAD_INCOME, LOAD_SAVING} from "./const";

export const addIncome = (income) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/income/add-income`, income);
		dispatch({ type: ADD_INCOME, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};

export const getIncome = () => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/income/incomes`);
		dispatch({ type: LOAD_INCOME, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};

export const AddExpense = (expense) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/expense/add-expense`, expense);
		dispatch({ type: ADD_EXPENSE, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};

export const getExpense = () => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/expense/expenses`);
		dispatch({ type: LOAD_EXPENSE, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};
export const addSaving = (saving) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/savings/add-saving`, saving);
		dispatch({ type: ADD_SAVING, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};

export const getSaving = () => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/savings/savings`);
		dispatch({ type: LOAD_SAVING, payload: response.data.data });
	} catch (error) {
		dispatch({ type: ERROR });
	}
};
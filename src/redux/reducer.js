import {ADD_EXPENSE, ADD_INCOME, ADD_SAVING, FILTER, FILTER_EXPENSE, FILTER_SAVING, LOADING, LOAD_EXPENSE, LOAD_INCOME, LOAD_SAVING, SORTING, SORTING_EXPENSE, SORT_SAVING} from "./const";

const initalState = {
	isLoggedIn: false,
	isLoading: false,
	isAuthenticated: false,
	userData: [],
	reservedData: [],
	incomeData: [],
	expenseData: [],
	resExpense: [],
	savingData: [],
	resSaving: [],
};

export const financialReducer = (state = initalState, { type, payload }) => {
	switch (type) {
		case LOADING: {
			return {
				...state,
				isLoading: true,
			};
		}
		case ADD_INCOME: {
			return {
				...state,
				isLoading: false,
				incomeData: [...state.incomeData, payload],
			};
		}
		case LOAD_INCOME: {
			return {
				...state,
				isLoading: false,
				incomeData: payload,
				reservedData: payload,
			};
		}
		case SORTING: {
			const sortedData = [...state.incomeData].sort((a, b) => {
				if (payload === "LowToHigh") {
					return a.amount - b.amount;
				} else if (payload === "HighToLow") {
					return b.amount - a.amount;
				}
			});
			return {
				...state,
				incomeData: sortedData,
			};
		}
		case FILTER: {
			const data = [...state.reservedData];
			const filteredIncomes = data.filter((item) =>
				item.description.toLowerCase().includes(payload.toLowerCase())
			);
			return {
				...state,
				incomeData: payload === "" ? state.reservedData : filteredIncomes,
			};
		}
		case ADD_EXPENSE: {
			return {
				...state,
				isLoading: false,
				expenseData: [...state.expenseData, payload],
			};
		}
		case LOAD_EXPENSE: {
			return {
				...state,
				isLoading: false,
				expenseData: payload,
				resExpense: payload,
			};
		}
		case FILTER_EXPENSE: {
			const data = [...state.resExpense];
			const filterdata = data.filter((item) =>
				item.category.toLowerCase().includes(payload.toLowerCase())
			);
			return {
				...state,
				expenseData: payload === "" ? state.resExpense : filterdata,
			};
		}
		case SORTING_EXPENSE: {
			const sortedExpense = [...state.expenseData].sort((a, b) => {
				if (payload === "LowToHigh") {
					return a.amount - b.amount;
				} else if (payload === "HighToLow") {
					return b.amount - a.amount;
				}
			});
			return {
				...state,
				expenseData: sortedExpense,
			};
		}
		case LOAD_SAVING: {
			return {
				...state,
				savingData: payload,
				isLoading: false,
				resSaving: payload,
			};
		}
		case ADD_SAVING: {
			return {
				...state,
				savingData: [...state.savingData, payload],
				isLoading: false,
			};
		}
		case FILTER_SAVING: {
			const data = [...state.resSaving];
			const filterdata = data.filter((item) =>
				item.category.toLowerCase().includes(payload.toLowerCase())
			);
			return {
				...state,
				savingData: payload === "" ? state.resSaving : filterdata,
			};
		}
		case SORT_SAVING: {
			const sortedSaving = [...state.savingData].sort((a, b) => {
				if (payload === "LowToHigh") {
					return a.amount - b.amount;
				} else if (payload === "HighToLow") {
					return b.amount - a.amount;
				}
			});
			return {
				...state,
				savingData: sortedSaving,
			};
		}
		default: {
			return state;
		}
	}
};

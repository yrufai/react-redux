import { createStore, combineReducers} from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducers from "../reducers/filters";

export default () => {
    const store = Redux.createStore(
        combineReducers({
            expenses: expensesReducer,
            filter: filtersReducers
        })
    );
    return store;
};


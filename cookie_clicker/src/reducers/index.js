import countReducer from "./counter";
import isBuyingReducer from "./choose";
import itemsDataReducer from "./itemsData";

import { combineReducers } from "redux";

const combinedReducer = combineReducers({
    notesCount: countReducer,
    itemsData: itemsDataReducer,
    isBuying: isBuyingReducer
})

export default combinedReducer;
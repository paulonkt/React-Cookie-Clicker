import countReducer from "./counter";
import isBuyingReducer from "./choose";
import itemsDataReducer from "./itemsData";
import actualNotesReducer from "./actualNotes";

import { combineReducers } from "redux";

const combinedReducer = combineReducers({
    notesCount: countReducer,
    actualNotes: actualNotesReducer,
    itemsData: itemsDataReducer,
    isBuying: isBuyingReducer
})

export default combinedReducer;
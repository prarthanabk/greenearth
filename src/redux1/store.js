// import { createStore } from "redux";
// import rootReducers from "./reducers";

// const store = createStore(rootReducers);

// export default store;


import { createStore } from "redux";
// import rootReducer from "./reducers";
import rootReducer from "./reducers/rootReducer";
const store = createStore(rootReducer);

export default store;

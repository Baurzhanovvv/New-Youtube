import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import {CategoryReducer} from "./reducers/categories";
import {VideoReducer} from "./reducers/videos";
import {AuthReducer} from "./reducers/auth";
import {ChannelReducer} from "./reducers/channel";


let reducers = combineReducers({
    categoryData: CategoryReducer,
    videoData: VideoReducer,
    authData: AuthReducer,
    channelData: ChannelReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk) ));

export default store;
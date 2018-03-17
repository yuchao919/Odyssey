import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchNews } from './actions';
import rootReducer from './reducers';

// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchNews('frontend'));
console.log(store.getState());

setTimeout(() => {
  console.log(store.getState());
}, 1e4);

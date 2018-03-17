import { combineReducers } from 'redux';

const news = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_NEWS':
      const { keyword, data } = action;
      state[keyword] = { keyword, titles: data.map(item => item.title) };
      return state[keyword];
    default:
      return state;
  }
};

export default combineReducers({ news });

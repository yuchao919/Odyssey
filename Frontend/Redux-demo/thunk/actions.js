// export function fetchNews(keyword) {
//   return {
//     type: 'FETCH_NEWS',
//     keyword
//   };
// }

export const fetchNews = keyword => (dispatch, getState) => {
  return fetch(`https://www.reddit.com/r/${keyword}.json`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return dispatch(receiveNews(keyword, json.data.children.map(child => child.data)));
    });
};

export const receiveNews = (keyword, data) => {
  return {
    type: 'RECEIVE_NEWS',
    keyword,
    data,
    receivedAt: Date.now()
  };
};

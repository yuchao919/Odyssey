import { delay } from 'redux-saga';
import { select, put, takeEvery, all } from 'redux-saga/effects';

import { requestPosts, receivePosts } from '../actions';

const getPostsByRedditState = reddit => state => state.postsByReddit[reddit];

function* shouldFetchPosts(reddit) {
  const posts = yield select(getPostsByRedditState(reddit));
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate;
}

function* fetchPostAsync({ reddit }) {
  if (yield* shouldFetchPosts(reddit)) {
    yield put(requestPosts(reddit));
    const response = yield fetch(`https://www.reddit.com/r/${reddit}.json`);
    const json = yield response.json();
    yield put(receivePosts(reddit, json));
  }
}

export default function* rootSaga() {
  yield takeEvery('FETCH_POST_ASYNC', fetchPostAsync);
}

export const POST_MESSAGE = 'POST_MESSAGE';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
export const POST_MESSAGE_FAIL = 'POST_MESSAGE_FAIL';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const postMessage = msg => ({
  type: POST_MESSAGE,
  id: Date.now(),
  msg: msg
});

function pm(msg, cb) {
  console.log(`post message : ${msg}`);
  setTimeout(() => {
    const res = Math.random() > 0.3 ? 'success' : 'fail';
    cb(res);
  }, 1e3);
}

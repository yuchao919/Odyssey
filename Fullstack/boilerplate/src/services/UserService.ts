import httpCommon from '../http-common';

export async function queryUsers() {
  return httpCommon({
    url: '/queryUsers',
    method: 'post',
    params: {}
  });
};

import httpCommon from '../http-common';

export async function getCategory() {
  return httpCommon({
    url: '/getCategory',
    method: 'get',
    params: {}
  });
}

export async function getUserInfo() {
  return httpCommon({
    url: '/getUserInfo',
    method: 'get',
    params: {}
  });
}

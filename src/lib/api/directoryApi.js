import axios from 'axios';

const baseURL = '';

// token LocalStorage에서 받아오는지? (그러면 headers param 없애기)
const postDir = (headers, body) => {
  try {
    const { data } = axios({
      baseURL,
      url: '/directories',
      method: 'post',
      headers,
      data: body
    });
    console.log('[SUCCESS] POST DIRECTORIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] POST DIRECTORIES', error);
    return e;
  }
};

const updateDir = (headers, body, id) => {
  try {
    const { data } = axios({
      baseURL,
      url: `/directories/${id}`,
      method: 'put',
      headers,
      data: body
    });
    console.log('[SUCCESS] UPDATE DIRECTORIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] UPDATE DIRECTORIES', error);
    return e;
  }
};

const getDirAll = headers => {
  try {
    const { data } = axios({
      baseURL,
      url: `/directories`,
      method: 'put',
      headers
    });
    console.log('[SUCCESS] GET ALL DIRECTORIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET ALL DIRECTORIES', error);
    return e;
  }
};

const getDirById = (headers, id) => {
  try {
    const { data } = axios({
      baseURL,
      url: `/directories/${id}`,
      method: 'get',
      headers
    });
    console.log('[SUCCESS] GET DIRECTORIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET DIRECTORIES', error);
    return e;
  }
};

const getDirSearch = (headers, word) => {
  try {
    const { data } = axios({
      baseURL,
      url: `/directories/search?word=${word}`,
      method: 'get',
      headers
    });
    console.log('[SUCCESS] GET SEARCH DIRECTORIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET SEARCH DIRECTORIES', error);
    return e;
  }
};

const deleteDir = (headers, id) => {
  try {
    const { data } = axios({
      baseURL,
      url: `/directories/${id}`,
      method: 'delete',
      headers
    });
    console.log('[SUCCESS] DELETE DIRECTORIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] DELETE DIRECTORIES', error);
    return e;
  }
};

const addCookieToDir = (headers, body) => {
  try {
    const { data } = axios({
      baseURL,
      url: `/directories/add/cookie`,
      method: 'post',
      headers,
      data: body
    });
    console.log('[SUCCESS] ADD COOKIE TO DIRECTORIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] ADD COOKIE TO DIRECTORIES', error);
    return e;
  }
};

export default () => {
  postDir, updateDir, getDirAll, getDirById, getDirSearch, deleteDir, addCookieToDir;
};
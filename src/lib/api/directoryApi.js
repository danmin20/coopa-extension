import axios from 'axios';

const baseURL = 'https://www.cookieparking.com/api';

const postDir = async (headers, body) => {
  try {
    const { data } = await axios({
      baseURL,
      url: '/directories',
      method: 'post',
      headers,
      data: body
    });
    console.log('[SUCCESS] POST DIRECTORIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] POST DIRECTORIES', e);
    return e;
  }
};

const updateDir = async (headers, body, id) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `/directories/${id}`,
      method: 'put',
      headers,
      data: body
    });
    console.log('[SUCCESS] UPDATE DIRECTORIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] UPDATE DIRECTORIES', e);
    return e;
  }
};

const getDirAll = async headers => {
  try {
    const { data } = await axios({
      baseURL,
      url: `/directories`,
      method: 'get',
      headers
    });
    console.log('[SUCCESS] GET ALL DIRECTORIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET ALL DIRECTORIES', e);
    return e;
  }
};

const getDirById = async (headers, id) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `/directories/${id}`,
      method: 'get',
      headers
    });
    console.log('[SUCCESS] GET DIRECTORIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET DIRECTORIES', e);
    return e;
  }
};

const getDirSearch = async (headers, word) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `/directories/search?word=${word}`,
      method: 'get',
      headers
    });
    console.log('[SUCCESS] GET SEARCH DIRECTORIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET SEARCH DIRECTORIES', e);
    return e;
  }
};

const deleteDir = async (headers, id) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `/directories/${id}`,
      method: 'delete',
      headers
    });
    console.log('[SUCCESS] DELETE DIRECTORIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] DELETE DIRECTORIES', e);
    return e;
  }
};

const addCookieToDir = async (headers, body) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `/directories/add/cookie`,
      method: 'post',
      headers,
      data: body
    });
    console.log('[SUCCESS] ADD COOKIE TO DIRECTORIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] ADD COOKIE TO DIRECTORIES', e);
    return e;
  }
};

const dirApi = {
  postDir,
  updateDir,
  getDirAll,
  getDirById,
  getDirSearch,
  deleteDir,
  addCookieToDir
};

export default dirApi;

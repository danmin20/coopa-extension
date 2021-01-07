import axios from 'axios';

const baseURL = 'https://www.cookieparking.com';

// 문서에 url cookies 로 바뀔 예정이라고 되어 있어서 수정함
const postCookie = async (headers, body) => {
    try {
      const { data } = await axios({
        baseURL,
        url: '/cookies',
        method: 'post',
        headers: headers,
        data: body
      });
      console.log('[SUCCESS] POST COOKIES', data);
      return data;
    } catch (e) {
      console.error('[FAIL] POST COOKIES', error);
      return e;
    }
};

const getCookies = async headers => {
  try {
    const { data } = await axios({
      baseURL,
      url: '/cookies',
      method: 'get',
      headers: headers
    });
    console.log('[SUCCESS] GET COOKIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET COOKIES', error);
    return e;
  }
};

const getCookiesSearch = async (headers, word) => {
  try {
    const { data } = await axios({
      baseURL,
      url: `/cookies/search?word=${word}`,
      method: 'get',
      headers
    });
    console.log('[SUCCESS] GET SEARCH COOKIES', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET SEARCH COOKIES', error);
    return e;
  }
};

const getCookiesUnRead = async headers => {
  try {
    const { data } = await axios({
      baseURL,
      url: '/cookies/unread',
      method: 'get',
      headers
    });
    console.log('[SUCCESS] GET COOKIES UNREAD', data);
    return data;
  } catch (e) {
    console.error('[FAIL] GET COOKIES UNREAD', error);
    return e;
  }
};

const cookieAPI = {
  postCookie,
  getCookies,
  getCookiesSearch,
  getCookiesUnRead
};

export default cookieAPI;

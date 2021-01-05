import axios from 'axios';

const baseURL = 'https://www.cookieparking.com';

const postCookie = async (headers, body) => {
    try {
      const { data } = await axios({
        baseURL,
        url: '/cookie',
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


const getCookie = async (headers) => {
    try {
      const { data } = await axios({
        baseURL,
        url: '/cookie',
        method: 'get',
        headers: headers,
      });
      console.log('[SUCCESS] GET COOKIES', data);
      return data;
    } catch (e) {
      console.error('[FAIL] GET COOKIES', error);
      return e;
    }
};


const cookieAPI = {
    postCookie, getCookie,
}

export default cookieAPI;

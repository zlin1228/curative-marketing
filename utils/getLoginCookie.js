import cookie from 'cookie';

export const getLoginCookie = document => {
  const h = cookie.parse(document.cookie);
  const { curative_authorized: val } = h;

  return val;
};

export default getLoginCookie;

'use strict';
export default class CookieModule {
  constructor() {}

  setVisitedCookie() {
    const noDays = 1;
    const d = new Date();
    const expiresDate = new Date(d.getTime() + (noDays * 24 * 60 * 60 * 1000));
    const expires = `expires=+${expiresDate.toUTCString()}`;
    document.cookie = `visited=${d.toUTCString()};expires;path=/`;
  }

  readVisitedCookie() {
    const cookies = document.cookie.split(';');
    return cookies.filter((cookie) => {
      var parts = cookie.split('=');
      if (parts[0] === 'visited' || parts[0] === ' visited') {
        return cookie;
      }
    }).map((cookie) => {
      return cookie.split('=')[1];
    })[0];
  }
}

import decode from "jwt-decode";

export default class AuthService{
  constructor(domain){
    this.domain = domain || 'http://localhost:4000/api/sign_in';
  }

  SignIn = (email, password) => {
    return this.fetch(`${this.domain}`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password
      })
    }).then(use => {
      this.setToken(use.token);
      return Promise.resolve(use);
    })
  }

  loggedIn = () => {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token)
  }

  isTokenExpired = (token) => {
    try {
      const decoded = decode(token);
      if(decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch(e) {
      return false;
    }
  }

  setToken = (idToken) => {
    localStorage.setItem("id_token", idToken);
  }

  getToken = () => {
    return localStorage.getItem("id_token");
  }

  logOut = () => {
    localStorage.removeItem("id_token");
  }

  getProfile = () => {
    return decode(this.getToken());
  }

  fetch = (url, options) => {
    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }

    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer' + this.getToken()
    }
    return fetch(url, {
      headers,
      ...options
    }).then(this._checkStatus).then(response => response.json())
  }

  _checkStatus = (response) => {
    if(response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText);
      error.response = response
      throw error
    }
  }
}
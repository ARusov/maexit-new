import axios from "axios";
import router from "../../router/index";
import store from "../../store/index";

export class Util {

  static ID_TOKEN: string = 'id_token';
  static ACCESS_TOKEN: string = 'access_token';
  static USER_TYPE: string = 'user_type';
  static USER_EMAIL: string = 'user_email';

  public static getApiUrl(url: string) {
    return `http://localhost:8090/api/${url}`;
  }

  public static getHTTP(url: string) {
    let HTTP = axios.create({
      baseURL: Util.getApiUrl(url),
    })
    return HTTP;
  }


  public static getHTTPlogin(url: string) {
    let HTTP = axios.create({
      baseURL: 'http://localhost:8090/login',
    })
    return HTTP;
  }

  public static isLoggedIn() {
    var jwt = localStorage.getItem(Util.ID_TOKEN)
    if (jwt) {
      return true
    }
    else {
      return false
    }
  }

  public static login(email: string, pwd: string) {
    Util.getHTTPlogin('').post('', {
      email: email,
      pwd: pwd,
    })
      .then(response => {
        if (response.status == 200) {
          localStorage.setItem(Util.ID_TOKEN, response.data.token)
          store.state.isLoggedIn=true;
          localStorage.setItem(Util.USER_EMAIL, response.data.email);
          localStorage.setItem(Util.USER_TYPE, response.data.type);
          Util.routAfterLogin(response.data.type);

        }
      })
  }


  public static routAfterLogin(type: string) {
    if (localStorage.getItem(Util.USER_TYPE) == "1") {
      router.push('businessowner')
    }
  }

  public static logout() {
    // header.loggedIn=false;
    localStorage.removeItem(Util.USER_EMAIL);
    localStorage.removeItem(Util.USER_TYPE);
    localStorage.removeItem(Util.ID_TOKEN);
    store.state.isLoggedIn=false;
  }

  public static routToProfile(){
    if(Util.isLoggedIn()){
      if (localStorage.getItem(Util.USER_TYPE) == "1") {
        router.push('businessowner')
      }
    }
  }

}

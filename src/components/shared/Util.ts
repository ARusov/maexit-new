import axios from "axios";
import Vue from 'vue';
import router from '../../router/index';

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

  public static isLogedIn() {
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
          var id_token = response.data.token
          localStorage.setItem(Util.ID_TOKEN, id_token)
          Util.setUser(email)
          Util.routAfterLogin(response.data.type)
        }
      })
  }

  public static setUser(email: string) {
    Util.getHTTP('').get('user/' + email, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem(Util.ID_TOKEN)
      }
    })
      .then(response => {
        if (response.status == 200) {
          localStorage.setItem(Util.USER_EMAIL, email);
          localStorage.setItem(Util.USER_TYPE, response.data.type);
        }
      })
  }

  public static routAfterLogin(type:string){
    if (localStorage.getItem(Util.USER_TYPE) == "1") {
      router.push('businessowner')
    }
  }

  public static logout(){
    localStorage.removeItem(Util.USER_EMAIL);
    localStorage.removeItem(Util.USER_TYPE);
    localStorage.removeItem(Util.ID_TOKEN);
  }

}

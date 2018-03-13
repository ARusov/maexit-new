import axios from "axios";
import router from "../../router/index";
import store from "../../store/index";


export class Util {



  static ID_TOKEN: string = 'id_token';
  static ACCESS_TOKEN: string = 'access_token';
  static USER_TYPE: string = 'user_type';
  static USER_EMAIL: string = 'user_email';
  // static  API_URL:string = 'http://maexit-api-dev.eu-central-1.elasticbeanstalk.com';
  static  API_URL:string = 'http://localhost:8090';

  public static getApiUrl(url: string) {
    return `${Util.API_URL}/api/${url}`;
  }
  public static getPublicApiUrl(url: string) {
    return `${Util.API_URL}/publicapi/${url}`;
  }

  public static getHTTP(url: string) {
    let HTTP = axios.create({
      baseURL: Util.getApiUrl(url),
    })
    return HTTP;
  }

  public static getPublicHTTP(url: string) {
    let HTTP = axios.create({
      baseURL: Util.getPublicApiUrl(url),
    })
    return HTTP;
  }


  public static getHTTPlogin(url: string) {
    let HTTP = axios.create({
      baseURL: Util.API_URL+'/login',
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

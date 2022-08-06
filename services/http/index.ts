import axios, {Axios, AxiosRequestConfig} from "axios";
import {authInterceptor} from "../interceptors";
import {PageRoutes} from "../../ts/enum";
import router from "next/router";

export class HttpService {
  private readonly axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: `/api/`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axios.interceptors.request.use( authInterceptor)

    this.axios.interceptors.response.use(
      function (response) {
        return response.data;
      },
      function (error) {
        if (error.response.status === 401) {
          if (process.browser) {
            router.push(PageRoutes.Login)
          }
        }
        return Promise.reject(error.response.data);
      }
    );
  }

  public getInstance() {
    return this.axios;
  }
}

const Http = new HttpService();

export default Http.getInstance();

import axios, {Axios, AxiosRequestConfig} from "axios";
import {authInterceptor} from "../interceptors";
import {store} from "../../store";

export class HttpService {
  private readonly axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: `/api/`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // this.axios.interceptors.request.use( (config: AxiosRequestConfig) => {
    //   const storeState = store.getState();
    //   const { credentials } = storeState.auth;
    //
    //   config.headers = {
    //     ...config.headers,
    //     Authorization: `Bearer ${credentials?.token}`,
    //   };
    //
    //
    //
    //   return config;
    // });

    this.axios.interceptors.response.use(
      function (response) {
        return response.data;
      },
      function (error) {
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

import axios, {Axios} from "axios";
import {authInterceptor} from "../interceptors";
import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();

export class HttpService {
  private readonly axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: publicRuntimeConfig.backendUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axios.interceptors.request.use(authInterceptor);

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

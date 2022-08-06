import { AxiosRequestConfig } from "axios";
import { store } from "../../store";

export const authInterceptor = (config: AxiosRequestConfig) => {
  const storeState = store.getState();

  const { credentials } = storeState.auth;

  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${credentials?.token}`,
  };
  return config;
};

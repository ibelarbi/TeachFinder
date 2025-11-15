import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import {
  TEACHFINDER_API_URL,
} from "@utils/constants";

const TIMEOUT = 60 * 1000;

type OnResponseErrorParams = AxiosError;

const onResponseSuccess = (response: AxiosResponse): AxiosResponse => response;

const onResponseError = async (error: OnResponseErrorParams): Promise<never> => {
  return Promise.reject(error);
};

axios.interceptors.response.use(onResponseSuccess, onResponseError);

const teachFinderAPI = axios.create({
  baseURL: TEACHFINDER_API_URL,
  timeout: TIMEOUT,
  headers: {
    Authorization:  undefined,
    "Content-Type": "application/json",
  },
});

teachFinderAPI.interceptors.response.use(onResponseSuccess, onResponseError);

export default teachFinderAPI;

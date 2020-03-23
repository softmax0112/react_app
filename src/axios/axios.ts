import axios, { AxiosRequestConfig } from "axios";
import { ContentType } from "../enums";
import { requestHandler, successResponseHandler, errorResponseHandler } from "./interceptors";

const getAxiosInstance = (config: AxiosRequestConfig = {
    headers: { contentType: ContentType.json },
  }) => {
    const instance = axios.create({
        baseURL: "https://user-products.herokuapp.com/api/",
        headers: {
          'Content-Type' :  config.headers.contentType || ContentType.json,
        },
    });

    instance.interceptors.request.use(requestHandler);
    instance.interceptors.response.use(successResponseHandler, errorResponseHandler);

    return instance;
}

export default getAxiosInstance();
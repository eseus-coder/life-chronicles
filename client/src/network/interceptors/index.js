import axios from "axios";
import moment from "moment";
import moment_tz from "moment-timezone";
import { store } from "../../redux/store";
const baseUrl = process.env.REACT_APP_BASEURL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 30000, // Default timeout duration in milliseconds
  headers: {
    // Default headers applied to all requests
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
    timezone: moment().format("YYYY-MM-DD"),
    "tz-full": moment_tz.tz.guess(),
  },
});

// ********** request interceptor ********** //

axiosInstance.interceptors.request.use(
  (config) => {
    return Promise.resolve(config);
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ********** response interceptor ********** //

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    store.dispatch({ type: "ERROR_OCCURRED", payload: error });
    return Promise.reject(error);
  }
);

// *********** xhr api calls *************** //

export const makeRequest = async (
  methodName,
  path,
  {
    queryParameters,
    body,
    headers = {}, // Default to an empty object if headers are not provided
    responseType,
    timeout = 30000, // Default timeout duration in milliseconds
  } = {}
) => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  try {

    const response = await axiosInstance.request({
      url: path,
      method: methodName,
      params: queryParameters,
      data: body,
      cancelToken: source.token,
      headers: {
        ...headers,
        timezone: moment().format("YYYY-MM-DD"), // Update timezone header for each request
        "tz-full": moment_tz.tz.guess(),
      },
      responseType: responseType,
      timeout: timeout,
    });

    return response;

  } catch (error) {

    if (axios.isCancel(error)) {
      throw new Error("Request timed out");
    }

    throw error;

  } finally {
    source.cancel("Cleanup");
  }
};

// *********** global instance ************* //

const instance = {
  post: makeRequest.bind(null, "post"),
  get: makeRequest.bind(null, "get"),
  put: makeRequest.bind(null, "put"),
  delete: makeRequest.bind(null, "delete"),
};

export default instance;
export { baseUrl };

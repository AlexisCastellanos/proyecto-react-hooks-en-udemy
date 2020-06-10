import axios from "axios";

const baseURL = "https://www.omdbapi.com/?apiKey=58083ca3";
// const baseURL='https://www.omdbapi.com/?apiKey=ffd0c3a';

export const apiCall = (url, data, headers, method) =>
  axios({
    method,
    url: baseURL + url,
    data,
    headers,
  });

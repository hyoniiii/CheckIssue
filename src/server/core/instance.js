import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_API_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
  },
});

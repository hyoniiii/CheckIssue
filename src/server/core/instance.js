import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.github.com/repos/angular/angular-cli',
});

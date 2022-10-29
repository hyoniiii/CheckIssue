export const getToken = () => localStorage.getItem('AccessToken');
export const setToken = (token) => localStorage.setItem('AccessToken', token);

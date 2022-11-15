import { instance } from './core/instance';

export const issueAPI = {
  getRepoIssues: () => instance.get(''),
  getIssues: (page) => instance.get('/issues', { params: { per_page: 20, sort: 'comments', page } }),
  getIssue: (number) => instance.get(`/issues/${number}`),
};

export default issueAPI;

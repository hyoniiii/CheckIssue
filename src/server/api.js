import { instance } from './core/instance';

export const issueAPI = {
  getRepoIssues: () => instance.get(''),
  getIssues: () => instance.get('/issues', { params: { per_page: 100, sort: 'comments' } }),
  getIssue: (id) => instance.get(`/issues/${id}`),
};

export default issueAPI;

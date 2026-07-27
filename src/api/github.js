import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Accept: 'application/vnd.github+json' },
})

export const getUser = (username) =>
  api.get(`/users/${username}`).then((res) => res.data)

export const getUserRepos = (username) =>
  api
    .get(`/users/${username}/repos`, { params: { per_page: 100, sort: 'updated' } })
    .then((res) => res.data)

export const getRepo = (owner, name) =>
  api.get(`/repos/${owner}/${name}`).then((res) => res.data)

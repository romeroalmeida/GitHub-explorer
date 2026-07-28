export const endpoints = {
  users: {
    detail: (username: string) => `/users/${username}`,
    repos: (username: string) => `/users/${username}/repos`,
  },
  repositories: {
    detail: (owner: string, name: string) => `/repos/${owner}/${name}`,
  },
} as const

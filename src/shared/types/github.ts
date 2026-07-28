export interface GitHubUser {
  login: string
  name: string | null
  avatar_url: string
  html_url: string
  bio: string | null
  followers: number
  following: number
  public_repos: number
  email: string | null
  location: string | null
  blog: string | null
}

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  subscribers_count: number
  open_issues_count: number
  language: string | null
  updated_at: string
  created_at: string
  default_branch: string
  topics: string[]
  license: { spdx_id: string | null } | null
  owner: { login: string; avatar_url: string }
}

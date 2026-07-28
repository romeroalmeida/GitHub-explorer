import { apiClient } from '@/api/apiClient'
import { endpoints } from '@/api/endpoints'
import type { GitHubUser, GitHubRepo } from '@/shared/types/github'

export async function getUser(username: string): Promise<GitHubUser> {
  const { data } = await apiClient.get<GitHubUser>(endpoints.users.detail(username))
  return data
}

export async function getUserRepos(username: string): Promise<GitHubRepo[]> {
  const { data } = await apiClient.get<GitHubRepo[]>(endpoints.users.repos(username), {
    params: { per_page: 100, sort: 'updated' },
  })
  return data
}

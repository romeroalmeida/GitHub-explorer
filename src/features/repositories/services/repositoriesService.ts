import { apiClient } from '@/api/apiClient'
import { endpoints } from '@/api/endpoints'
import type { GitHubRepo } from '@/shared/types/github'

export async function getRepository(owner: string, name: string): Promise<GitHubRepo> {
  const { data } = await apiClient.get<GitHubRepo>(endpoints.repositories.detail(owner, name))
  return data
}

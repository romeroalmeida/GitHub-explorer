import type { GitHubRepo } from '@/shared/types/github'

export type SortField = 'stars' | 'name' | 'updated'
export type SortDirection = 'asc' | 'desc'

export interface RepoSort {
  field: SortField
  direction: SortDirection
}

const comparators: Record<SortField, (a: GitHubRepo, b: GitHubRepo) => number> = {
  stars: (a, b) => a.stargazers_count - b.stargazers_count,
  name: (a, b) => a.name.localeCompare(b.name),
  updated: (a, b) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime(),
}

export const sortRepos = (
  repos: GitHubRepo[],
  field: SortField,
  direction: SortDirection,
): GitHubRepo[] => {
  const sorted = [...repos].sort(comparators[field])
  return direction === 'desc' ? sorted.reverse() : sorted
}

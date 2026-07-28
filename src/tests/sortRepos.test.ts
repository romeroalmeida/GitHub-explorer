import { test, expect } from 'vitest'
import type { GitHubRepo } from '@/shared/types/github'
import { sortRepos } from '@/features/users/utils/sortRepos'

const makeRepo = (overrides: Partial<GitHubRepo>): GitHubRepo =>
  ({
    name: '',
    stargazers_count: 0,
    updated_at: '2024-01-01T00:00:00Z',
    ...overrides,
  }) as GitHubRepo

const repos = [
  makeRepo({ name: 'beta', stargazers_count: 10, updated_at: '2024-01-10T00:00:00Z' }),
  makeRepo({ name: 'alpha', stargazers_count: 50, updated_at: '2023-06-01T00:00:00Z' }),
  makeRepo({ name: 'gamma', stargazers_count: 30, updated_at: '2024-05-20T00:00:00Z' }),
]

const names = (list: GitHubRepo[]) => list.map((r) => r.name)

test('ordena por estrelas decrescente (padrão do desafio)', () => {
  expect(names(sortRepos(repos, 'stars', 'desc'))).toEqual(['alpha', 'gamma', 'beta'])
})

test('ordena por estrelas crescente', () => {
  expect(names(sortRepos(repos, 'stars', 'asc'))).toEqual(['beta', 'gamma', 'alpha'])
})

test('ordena por nome', () => {
  expect(names(sortRepos(repos, 'name', 'asc'))).toEqual(['alpha', 'beta', 'gamma'])
})

test('ordena por atualização decrescente', () => {
  expect(names(sortRepos(repos, 'updated', 'desc'))).toEqual(['gamma', 'beta', 'alpha'])
})

test('não modifica o array original', () => {
  const original = names(repos)
  sortRepos(repos, 'stars', 'desc')
  expect(names(repos)).toEqual(original)
})

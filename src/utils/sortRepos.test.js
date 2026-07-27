import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sortRepos } from './sortRepos.js'

const repos = [
  { name: 'beta', stargazers_count: 10, updated_at: '2024-01-10T00:00:00Z' },
  { name: 'alpha', stargazers_count: 50, updated_at: '2023-06-01T00:00:00Z' },
  { name: 'gamma', stargazers_count: 30, updated_at: '2024-05-20T00:00:00Z' },
]

const names = (list) => list.map((r) => r.name)

test('ordena por estrelas decrescente (padrão do desafio)', () => {
  assert.deepEqual(names(sortRepos(repos, 'stars', 'desc')), ['alpha', 'gamma', 'beta'])
})

test('ordena por estrelas crescente', () => {
  assert.deepEqual(names(sortRepos(repos, 'stars', 'asc')), ['beta', 'gamma', 'alpha'])
})

test('ordena por nome', () => {
  assert.deepEqual(names(sortRepos(repos, 'name', 'asc')), ['alpha', 'beta', 'gamma'])
})

test('ordena por atualização decrescente', () => {
  assert.deepEqual(names(sortRepos(repos, 'updated', 'desc')), ['gamma', 'beta', 'alpha'])
})

test('não modifica o array original', () => {
  const original = [...repos]
  sortRepos(repos, 'stars', 'desc')
  assert.deepEqual(repos, original)
})

import { test, expect } from 'vitest'
import type { FavoriteRepo } from '@/shared/types/favorite'
import { toggleFavorite } from './favorites'

const makeFav = (id: number): FavoriteRepo =>
  ({ id, name: `repo-${id}`, ownerLogin: 'dev' }) as FavoriteRepo

test('adiciona um repositório novo no topo da lista', () => {
  const result = toggleFavorite([makeFav(1)], makeFav(2))
  expect(result.map((r) => r.id)).toEqual([2, 1])
})

test('remove um repositório já favoritado', () => {
  const result = toggleFavorite([makeFav(1), makeFav(2)], makeFav(1))
  expect(result.map((r) => r.id)).toEqual([2])
})

test('não duplica ao favoritar o mesmo repositório', () => {
  const result = toggleFavorite([makeFav(1)], makeFav(1))
  expect(result).toEqual([])
})

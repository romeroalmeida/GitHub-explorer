import { test, expect } from 'vitest'
import { getPageItems } from '@/shared/utils/pagination'

test('lista todas as páginas quando são poucas', () => {
  expect(getPageItems(1, 5)).toEqual([1, 2, 3, 4, 5])
})

test('reticências à direita quando o início está ativo', () => {
  expect(getPageItems(2, 20)).toEqual([1, 2, 3, 4, 5, 'ellipsis', 20])
})

test('reticências à esquerda quando o fim está ativo', () => {
  expect(getPageItems(19, 20)).toEqual([1, 'ellipsis', 16, 17, 18, 19, 20])
})

test('reticências dos dois lados no meio', () => {
  expect(getPageItems(10, 20)).toEqual([1, 'ellipsis', 9, 10, 11, 'ellipsis', 20])
})

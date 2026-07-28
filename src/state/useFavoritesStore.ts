import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { FavoriteRepo } from '@/shared/types/favorite'
import { toggleFavorite } from '@/shared/utils/favorites'

interface FavoritesState {
  favorites: FavoriteRepo[]
  toggle: (repo: FavoriteRepo) => void
  remove: (id: number) => void
  clear: () => void
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],
      toggle: (repo) =>
        set((state) => ({ favorites: toggleFavorite(state.favorites, repo) })),
      remove: (id) =>
        set((state) => ({ favorites: state.favorites.filter((f) => f.id !== id) })),
      clear: () => set({ favorites: [] }),
    }),
    { name: 'gh-explorer:favorites' },
  ),
)

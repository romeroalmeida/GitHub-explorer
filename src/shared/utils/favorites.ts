import type { GitHubRepo } from '@/shared/types/github'
import type { FavoriteRepo } from '@/shared/types/favorite'

export const toFavorite = (repo: GitHubRepo): FavoriteRepo => ({
  id: repo.id,
  name: repo.name,
  ownerLogin: repo.owner.login,
  ownerAvatar: repo.owner.avatar_url,
  description: repo.description,
  stargazers_count: repo.stargazers_count,
  language: repo.language,
  htmlUrl: repo.html_url,
  addedAt: Date.now(),
})

// Adiciona (no topo) se ainda não existe, ou remove se já está favoritado.
export const toggleFavorite = (
  list: FavoriteRepo[],
  repo: FavoriteRepo,
): FavoriteRepo[] => {
  const exists = list.some((item) => item.id === repo.id)
  return exists ? list.filter((item) => item.id !== repo.id) : [repo, ...list]
}

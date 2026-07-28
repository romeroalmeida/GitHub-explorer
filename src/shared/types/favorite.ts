export interface FavoriteRepo {
  id: number
  name: string
  ownerLogin: string
  ownerAvatar: string
  description: string | null
  stargazers_count: number
  language: string | null
  htmlUrl: string
  addedAt: number
}

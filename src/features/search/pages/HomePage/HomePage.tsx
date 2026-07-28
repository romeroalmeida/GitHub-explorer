import { Heart, ArrowRight } from 'lucide-react'
import { SearchForm, FavoriteRepoCard } from '@/shared/components'
import { useFavoritesStore } from '@/state/useFavoritesStore'
import * as S from './style'

const RECENT_LIMIT = 4

export function HomePage() {
  const favorites = useFavoritesStore((state) => state.favorites)
  const recent = favorites.slice(0, RECENT_LIMIT)

  return (
    <S.Screen>
      <S.Hero>
        <S.Title>Explore os repositórios de qualquer dev</S.Title>
        <S.Subtitle>
          Busque um usuário do GitHub e navegue pelos projetos mais estrelados.
        </S.Subtitle>
        <SearchForm variant="hero" />

        {recent.length > 0 && (
          <S.Favorites>
            <S.FavoritesHead>
              <S.FavoritesTitle>
                <Heart size={14} />
                Favoritos recentes
              </S.FavoritesTitle>
              <S.SeeAll to="/favorites">
                ver todos ({favorites.length})
                <ArrowRight size={14} />
              </S.SeeAll>
            </S.FavoritesHead>
            <S.FavoritesGrid>
              {recent.map((repo) => (
                <FavoriteRepoCard key={repo.id} repo={repo} compact />
              ))}
            </S.FavoritesGrid>
          </S.Favorites>
        )}
      </S.Hero>
    </S.Screen>
  )
}

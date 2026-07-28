import { Heart, Trash2 } from 'lucide-react'
import { FavoriteRepoCard, StateMessage, BackHomeLink } from '@/shared/components'
import { useFavoritesStore } from '@/state/useFavoritesStore'
import * as S from './style'

export function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites)
  const clear = useFavoritesStore((state) => state.clear)

  if (favorites.length === 0) {
    return (
      <StateMessage
        icon={<Heart size={26} />}
        title="Nenhum favorito ainda"
        description="Abra um repositório e toque em Favoritar para guardá-lo aqui."
        action={<BackHomeLink />}
      />
    )
  }

  return (
    <S.Container>
      <S.Header>
        <S.TitleGroup>
          <S.Title>Favoritos</S.Title>
          <S.Count>{favorites.length}</S.Count>
        </S.TitleGroup>
        <S.ClearButton type="button" onClick={clear}>
          <Trash2 size={15} />
          Limpar tudo
        </S.ClearButton>
      </S.Header>

      <S.Grid>
        {favorites.map((repo) => (
          <FavoriteRepoCard key={repo.id} repo={repo} />
        ))}
      </S.Grid>
    </S.Container>
  )
}

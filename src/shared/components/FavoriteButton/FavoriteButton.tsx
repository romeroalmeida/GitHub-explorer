import { Heart } from 'lucide-react'
import type { FavoriteRepo } from '@/shared/types/favorite'
import { useFavoritesStore } from '@/state/useFavoritesStore'
import * as S from './style'

interface FavoriteButtonProps {
  repo: FavoriteRepo
  variant?: 'button' | 'icon'
}

export function FavoriteButton({ repo, variant = 'button' }: FavoriteButtonProps) {
  const isFavorite = useFavoritesStore((state) =>
    state.favorites.some((f) => f.id === repo.id),
  )
  const toggle = useFavoritesStore((state) => state.toggle)

  const label = isFavorite ? 'Favoritado' : 'Favoritar'
  const heart = <Heart size={variant === 'icon' ? 17 : 16} fill={isFavorite ? 'currentColor' : 'none'} />

  if (variant === 'icon') {
    return (
      <S.IconButton
        type="button"
        $active={isFavorite}
        onClick={() => toggle(repo)}
        aria-pressed={isFavorite}
        aria-label={label}
        title={label}
      >
        {heart}
      </S.IconButton>
    )
  }

  return (
    <S.Button
      type="button"
      $active={isFavorite}
      onClick={() => toggle(repo)}
      aria-pressed={isFavorite}
    >
      {heart}
      {label}
    </S.Button>
  )
}

import { Heart } from 'lucide-react'
import type { FavoriteRepo } from '@/shared/types/favorite'
import { useFavoritesStore } from '@/state/useFavoritesStore'
import * as S from './style'

interface FavoriteButtonProps {
  repo: FavoriteRepo
  variant?: 'button' | 'icon' | 'subtle'
}

export function FavoriteButton({ repo, variant = 'button' }: FavoriteButtonProps) {
  const isFavorite = useFavoritesStore((state) =>
    state.favorites.some((f) => f.id === repo.id),
  )
  const toggle = useFavoritesStore((state) => state.toggle)

  const label = isFavorite ? 'Favoritado' : 'Favoritar'
  const size = variant === 'button' ? 16 : 17
  const heart = (
    <Heart
      size={size}
      fill={isFavorite ? (variant === 'subtle' ? '#E5484D' : 'currentColor') : 'none'}
      color={isFavorite && variant === 'subtle' ? '#E5484D' : undefined}
    />
  )

  const shared = {
    type: 'button' as const,
    $active: isFavorite,
    onClick: () => toggle(repo),
    'aria-pressed': isFavorite,
  }

  if (variant === 'icon') {
    return (
      <S.IconButton {...shared} aria-label={label} title={label}>
        {heart}
      </S.IconButton>
    )
  }

  if (variant === 'subtle') {
    return (
      <S.SubtleButton {...shared}>
        {heart}
        {label}
      </S.SubtleButton>
    )
  }

  return (
    <S.Button {...shared}>
      {heart}
      {label}
    </S.Button>
  )
}

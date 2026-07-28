import { Outlet, useMatch } from 'react-router-dom'
import { Terminal, Heart } from 'lucide-react'
import { SearchForm } from '@/shared/components'
import { useFavoritesStore } from '@/state/useFavoritesStore'
import { Footer } from '../Footer/Footer'
import * as S from './style'

export function RootLayout() {
  const isHome = useMatch('/')
  const favoritesCount = useFavoritesStore((state) => state.favorites.length)

  return (
    <S.Shell>
      <S.Nav>
        <S.NavInner>
          <S.Brand to="/">
            <Terminal size={18} />
            <span>gh-explorer</span>
          </S.Brand>
          <S.NavActions>
            {!isHome && <SearchForm variant="mini" />}
            <S.FavLink to="/favorites" aria-label="Favoritos">
              <Heart size={16} color="#E5484D" fill="#E5484D" />
              <S.FavLabel>Favoritos</S.FavLabel>
              {favoritesCount > 0 && <S.FavBadge>{favoritesCount}</S.FavBadge>}
            </S.FavLink>
          </S.NavActions>
        </S.NavInner>
      </S.Nav>
      <S.Main>
        <Outlet />
      </S.Main>
      <Footer />
    </S.Shell>
  )
}

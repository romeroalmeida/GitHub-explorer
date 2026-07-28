import { useEffect, useState } from 'react'
import { Outlet, useLocation, useMatch } from 'react-router-dom'
import { Terminal, Heart, Search, X } from 'lucide-react'
import { SearchForm } from '@/shared/components'
import { useFavoritesStore } from '@/state/useFavoritesStore'
import { Footer } from '../Footer/Footer'
import * as S from './style'

export function RootLayout() {
  const isHome = useMatch('/')
  const favoritesCount = useFavoritesStore((state) => state.favorites.length)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  // Fecha a busca expansível ao mudar de página.
  useEffect(() => {
    setSearchOpen(false)
  }, [location.pathname])

  return (
    <S.Shell>
      <S.Nav>
        <S.NavInner>
          <S.Brand to="/">
            <Terminal size={18} />
            <span>gh-explorer</span>
          </S.Brand>
          <S.NavActions>
            {!isHome && (
              <>
                <S.MiniSearch>
                  <SearchForm variant="mini" />
                </S.MiniSearch>
                <S.SearchToggle
                  type="button"
                  onClick={() => setSearchOpen((open) => !open)}
                  aria-label={searchOpen ? 'Fechar busca' : 'Buscar'}
                  aria-expanded={searchOpen}
                >
                  {searchOpen ? <X size={18} /> : <Search size={18} />}
                </S.SearchToggle>
              </>
            )}
            <S.FavLink to="/favorites" aria-label="Favoritos">
              <Heart size={16} color="#E5484D" fill="#E5484D" />
              <S.FavLabel>Favoritos</S.FavLabel>
              {favoritesCount > 0 && <S.FavBadge>{favoritesCount}</S.FavBadge>}
            </S.FavLink>
          </S.NavActions>
        </S.NavInner>
        {!isHome && searchOpen && (
          <S.MobileSearch>
            <SearchForm variant="hero" onSubmitted={() => setSearchOpen(false)} />
          </S.MobileSearch>
        )}
      </S.Nav>
      <S.Main>
        <Outlet />
      </S.Main>
      <Footer />
    </S.Shell>
  )
}

import { Outlet, useMatch } from 'react-router-dom'
import { Terminal } from 'lucide-react'
import { SearchForm } from '@/shared/components'
import { Footer } from '../Footer/Footer'
import * as S from './style'

export function RootLayout() {
  const isHome = useMatch('/')

  return (
    <S.Shell>
      <S.Nav>
        <S.Brand to="/">
          <Terminal size={18} />
          <span>gh-explorer</span>
        </S.Brand>
        {!isHome && <SearchForm variant="mini" />}
      </S.Nav>
      <S.Main>
        <Outlet />
      </S.Main>
      <Footer />
    </S.Shell>
  )
}

import { Link, Outlet, useMatch } from 'react-router-dom'
import styled from 'styled-components'
import { Terminal } from 'lucide-react'
import { SearchForm } from './SearchForm'

export function Layout() {
  const isHome = useMatch('/')

  return (
    <>
      <Nav>
        <Brand to="/">
          <Terminal size={18} />
          <span>gh-explorer</span>
        </Brand>
        {!isHome && <SearchForm variant="mini" />}
      </Nav>
      <Main>
        <Outlet />
      </Main>
    </>
  )
}

const Nav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: 768px) {
    padding: 14px 32px;
  }
`

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.font.mono};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const Main = styled.main`
  width: 100%;
`

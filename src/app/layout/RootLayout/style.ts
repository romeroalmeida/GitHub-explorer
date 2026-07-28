import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Shell = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Nav = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 20px;

  @media (min-width: 768px) {
    padding: 14px 40px;
  }
`

export const Brand = styled(Link)`
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

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const FavLink = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.panel};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const FavLabel = styled.span`
  display: none;

  @media (min-width: 576px) {
    display: inline;
  }
`

export const FavBadge = styled.span`
  display: grid;
  place-items: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.bg};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  font-weight: 700;
`

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`

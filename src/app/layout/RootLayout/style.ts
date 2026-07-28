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

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`

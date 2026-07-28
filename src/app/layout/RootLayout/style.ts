import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.header`
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
  width: 100%;
`

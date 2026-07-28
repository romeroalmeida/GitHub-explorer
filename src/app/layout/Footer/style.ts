import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Footer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.panel};
`

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 24px;

  @media (min-width: 768px) {
    padding: 48px 40px 28px;
  }
`

export const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1.4fr;
    gap: 40px;
  }
`

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 320px;
`

export const BrandRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const Tagline = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dim};
  line-height: 1.5;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ColTitle = styled.h4`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dim};
`

export const ColLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  width: fit-content;

  svg {
    color: ${({ theme }) => theme.colors.dim};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};

    svg {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`

export const NavLink = styled(Link)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  width: fit-content;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const DevName = styled.span`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 28px 0 20px;
`

export const Bottom = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 12px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Copy = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.dim};
  text-align: center;
`

export const Signature = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.dim};

  b {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
  }
`

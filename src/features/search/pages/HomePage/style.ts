import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Screen = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  padding: 40px 24px;
`

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 620px;
  text-align: center;
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 13px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.dim};

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(30px, 6vw, 44px);
  font-weight: 700;
  line-height: 1.12;
`

export const Subtitle = styled.p`
  max-width: 480px;
  color: ${({ theme }) => theme.colors.dim};
  font-size: 16px;
`

export const Favorites = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  margin-top: 12px;
  padding-top: 28px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  text-align: left;
`

export const FavoritesHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const FavoritesTitle = styled.h2`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dim};

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const SeeAll = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};

  &:hover {
    filter: brightness(1.1);
  }
`

export const FavoritesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

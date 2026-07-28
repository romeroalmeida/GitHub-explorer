import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  padding: 14px 18px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: border-color 0.15s ease, transform 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-width: 200px;
`

export const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.accent};
`

export const Name = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 15px;
  font-weight: 600;
`

export const Description = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.dim};
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  color: ${({ theme }) => theme.colors.dim};
`

export const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
`

export const Mono = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  color: ${({ theme }) => theme.colors.text};
`

export const Dot = styled.span<{ $color: string }>`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`

export const Updated = styled.span`
  font-size: 12px;
`

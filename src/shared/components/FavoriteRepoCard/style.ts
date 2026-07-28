import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: border-color 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

export const Body = styled(Link)<{ $compact?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $compact }) => ($compact ? '6px' : '8px')};
  flex: 1;
  min-width: 0;
  padding: ${({ $compact }) => ($compact ? '11px 14px' : '16px 18px')};
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
`

export const Avatar = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  flex-shrink: 0;
`

export const Name = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Description = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.dim};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;
  color: ${({ theme }) => theme.colors.dim};
`

export const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
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

export const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: transparent;
  color: ${({ theme }) => theme.colors.dim};

  &:hover {
    background: ${({ theme }) => theme.colors.panel2};
    color: ${({ theme }) => theme.colors.danger};
  }
`

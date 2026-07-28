import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  position: relative;
  display: flex;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: border-color 0.15s ease;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

export const Body = styled(Link)<{ $compact?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $compact }) => ($compact ? '5px' : '8px')};
  flex: 1;
  min-width: 0;
  padding: ${({ $compact }) => ($compact ? '10px 12px' : '16px 18px')};
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  min-width: 0;
  padding-right: 24px;
`

export const Avatar = styled.img<{ $compact?: boolean }>`
  width: ${({ $compact }) => ($compact ? '16px' : '22px')};
  height: ${({ $compact }) => ($compact ? '16px' : '22px')};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  flex-shrink: 0;
`

export const Name = styled.span<{ $compact?: boolean }>`
  flex: 1;
  min-width: 0;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ $compact }) => ($compact ? '12.5px' : '14px')};
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

export const Meta = styled.div<{ $compact?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ $compact }) => ($compact ? '12px' : '16px')};
  margin-top: auto;
  color: ${({ theme }) => theme.colors.dim};
`

export const MetaItem = styled.span<{ $compact?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: ${({ $compact }) => ($compact ? '11px' : '12px')};
`

export const Mono = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  color: ${({ theme }) => theme.colors.text};
`

export const Dot = styled.span<{ $color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  flex-shrink: 0;
`

export const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: transparent;
  color: ${({ theme }) => theme.colors.dim};

  &:hover {
    background: ${({ theme }) => theme.colors.panel2};
    color: ${({ theme }) => theme.colors.danger};
  }
`

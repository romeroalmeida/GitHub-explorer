import styled from 'styled-components'

export const Card = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 26px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
`

export const Avatar = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export const Identity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Name = styled.h1`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 21px;
  font-weight: 700;
`

export const Login = styled.a`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dim};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const Bio = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dim};
`

export const Stats = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.panel2};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`

export const Stat = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  padding: 12px 6px;

  & + & {
    border-left: 1px solid ${({ theme }) => theme.colors.border};
  }
`

export const StatValue = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 16px;
  font-weight: 700;
`

export const StatLabel = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.dim};
`

export const MetaList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 11px;
  list-style: none;
`

export const MetaItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.dim};
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const MetaLink = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

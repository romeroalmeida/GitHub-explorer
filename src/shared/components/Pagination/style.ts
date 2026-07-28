import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
  padding-top: 8px;
`

export const Button = styled.button<{ $active?: boolean }>`
  display: grid;
  place-items: center;
  min-width: 36px;
  height: 36px;
  padding: 0 10px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.border)};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.accentSoft : theme.colors.panel};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.accent : theme.colors.text};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`

export const Ellipsis = styled.span`
  display: grid;
  place-items: center;
  min-width: 24px;
  height: 36px;
  color: ${({ theme }) => theme.colors.dim};
`

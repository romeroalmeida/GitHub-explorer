import styled from 'styled-components'

export const Button = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 22px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.border)};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.accentSoft : theme.colors.panel};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.accent : theme.colors.text};
  font-weight: 600;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

export const SubtleButton = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 8px;
  border: none;
  background: transparent;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, $active }) => ($active ? theme.colors.text : theme.colors.dim)};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const IconButton = styled.button<{ $active?: boolean }>`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.border)};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.accentSoft : theme.colors.panel};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.accent : theme.colors.dim};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.dim};
`

export const Select = styled.select`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  outline: none;
  cursor: pointer;

  option {
    background: ${({ theme }) => theme.colors.panel};
  }
`

export const DirectionButton = styled.button`
  display: grid;
  place-items: center;
  padding: 9px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.dim};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

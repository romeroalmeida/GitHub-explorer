import styled from 'styled-components'

export const Prompt = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
`

export const HeroForm = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 10px 10px 18px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

export const HeroInput = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 15px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.dim};
  }

  /* Evita o zoom automático do iOS ao focar (fonte precisa ser >= 16px) */
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.bg};
  font-weight: 700;

  &:hover {
    filter: brightness(1.05);
  }
`

export const MiniForm = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 300px;
  max-width: 42vw;
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

export const MiniInput = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.dim};
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

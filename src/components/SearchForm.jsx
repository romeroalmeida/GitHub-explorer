import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Search } from 'lucide-react'

export function SearchForm({ variant = 'hero', initialValue = '' }) {
  const [value, setValue] = useState(initialValue)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const username = value.trim()
    if (!username) return
    navigate(`/user/${encodeURIComponent(username)}`)
  }

  if (variant === 'mini') {
    return (
      <MiniForm onSubmit={handleSubmit} role="search">
        <Prompt>~$</Prompt>
        <MiniInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="buscar usuário"
          aria-label="Buscar usuário do GitHub"
        />
      </MiniForm>
    )
  }

  return (
    <HeroForm onSubmit={handleSubmit} role="search">
      <Prompt>~$</Prompt>
      <HeroInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="torvalds"
        aria-label="Buscar usuário do GitHub"
        autoFocus
      />
      <SubmitButton type="submit">
        <Search size={16} />
        Buscar
      </SubmitButton>
    </HeroForm>
  )
}

const Prompt = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
`

const HeroForm = styled.form`
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

const HeroInput = styled.input`
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
`

const SubmitButton = styled.button`
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

const MiniForm = styled.form`
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

const MiniInput = styled.input`
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
`

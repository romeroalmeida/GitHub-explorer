import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import * as S from './style'

interface SearchFormProps {
  variant?: 'hero' | 'mini'
  initialValue?: string
}

export function SearchForm({ variant = 'hero', initialValue = '' }: SearchFormProps) {
  const [value, setValue] = useState(initialValue)
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const username = value.trim()
    if (!username) return
    navigate(`/user/${encodeURIComponent(username)}`)
  }

  if (variant === 'mini') {
    return (
      <S.MiniForm onSubmit={handleSubmit} role="search">
        <S.Prompt>~$</S.Prompt>
        <S.MiniInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="buscar usuário"
          aria-label="Buscar usuário do GitHub"
        />
      </S.MiniForm>
    )
  }

  return (
    <S.HeroForm onSubmit={handleSubmit} role="search">
      <S.Prompt>~$</S.Prompt>
      <S.HeroInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="torvalds"
        aria-label="Buscar usuário do GitHub"
        autoFocus
      />
      <S.SubmitButton type="submit">
        <Search size={16} />
        Buscar
      </S.SubmitButton>
    </S.HeroForm>
  )
}

import { Terminal } from 'lucide-react'
import { SearchForm } from '@/shared/components'
import * as S from './style'

export function HomePage() {
  return (
    <S.Screen>
      <S.Hero>
        <S.Badge>
          <Terminal size={15} />
          gh-explorer
        </S.Badge>
        <S.Title>Explore os repositórios de qualquer dev</S.Title>
        <S.Subtitle>
          Busque um usuário do GitHub e navegue pelos projetos mais estrelados.
        </S.Subtitle>
        <SearchForm variant="hero" />
      </S.Hero>
    </S.Screen>
  )
}

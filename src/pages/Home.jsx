import styled from 'styled-components'
import { Terminal } from 'lucide-react'
import { SearchForm } from '../components/SearchForm'

export function Home() {
  return (
    <Screen>
      <Hero>
        <Badge>
          <Terminal size={15} />
          gh-explorer
        </Badge>
        <Title>Explore os repositórios de qualquer dev</Title>
        <Subtitle>
          Busque um usuário do GitHub e navegue pelos projetos mais estrelados.
        </Subtitle>
        <SearchForm variant="hero" />
      </Hero>
    </Screen>
  )
}

const Screen = styled.div`
  min-height: calc(100vh - 57px);
  display: grid;
  place-items: center;
  padding: 40px 24px;
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  max-width: 620px;
  text-align: center;
`

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 13px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.dim};

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.display};
  font-size: clamp(30px, 6vw, 44px);
  font-weight: 700;
  line-height: 1.12;
`

const Subtitle = styled.p`
  max-width: 480px;
  color: ${({ theme }) => theme.colors.dim};
  font-size: 16px;
`

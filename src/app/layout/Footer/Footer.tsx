import { Terminal, Globe, ArrowUpRight } from 'lucide-react'
import * as S from './style'

const SITE_URL = 'https://www.romeroalmeida.tech'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <S.Footer>
      <S.Inner>
        <S.Top>
          <S.Brand>
            <S.BrandRow>
              <Terminal size={18} />
              gh-explorer
            </S.BrandRow>
            <S.Tagline>
              Busque usuários do GitHub e explore seus repositórios mais populares,
              ordenados pelos mais estrelados.
            </S.Tagline>
          </S.Brand>

          <S.Column>
            <S.ColTitle>Navegação</S.ColTitle>
            <S.NavLink to="/">Buscar usuário</S.NavLink>
            <S.ColLink href="https://docs.github.com/rest" target="_blank" rel="noreferrer">
              API do GitHub
              <ArrowUpRight size={14} />
            </S.ColLink>
          </S.Column>

          <S.Column>
            <S.ColTitle>Desenvolvedor</S.ColTitle>
            <S.DevName>Romero Almeida</S.DevName>
            <S.ColLink href={SITE_URL} target="_blank" rel="noreferrer">
              <Globe size={15} />
              www.romeroalmeida.tech
            </S.ColLink>
          </S.Column>
        </S.Top>

        <S.Divider />

        <S.Bottom>
          <S.Copy>© {year} Romero Almeida. Todos os direitos reservados.</S.Copy>
          <S.Signature>
            ~$ desenvolvido por <b>Romero Almeida</b>
          </S.Signature>
        </S.Bottom>
      </S.Inner>
    </S.Footer>
  )
}

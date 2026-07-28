import type { ReactNode } from 'react'
import * as S from './style'

export function Loader({ label = 'Carregando...' }: { label?: string }) {
  return (
    <S.Centered role="status" aria-live="polite">
      <S.Spinner />
      <S.Muted>{label}</S.Muted>
    </S.Centered>
  )
}

interface StateMessageProps {
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
}

export function StateMessage({ icon, title, description, action }: StateMessageProps) {
  return (
    <S.Centered>
      {icon && <S.IconWrap>{icon}</S.IconWrap>}
      <S.Title>{title}</S.Title>
      {description && <S.Muted>{description}</S.Muted>}
      {action}
    </S.Centered>
  )
}

export function BackHomeLink() {
  return <S.ActionLink to="/">Voltar para a busca</S.ActionLink>
}

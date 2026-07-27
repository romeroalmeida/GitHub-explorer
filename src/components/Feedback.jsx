import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

export function Loader({ label = 'Carregando...' }) {
  return (
    <Centered role="status" aria-live="polite">
      <Spinner />
      <Muted>{label}</Muted>
    </Centered>
  )
}

export function StateMessage({ icon, title, description, action }) {
  return (
    <Centered>
      {icon && <IconWrap>{icon}</IconWrap>}
      <Title>{title}</Title>
      {description && <Muted>{description}</Muted>}
      {action}
    </Centered>
  )
}

export function BackHomeLink() {
  return <ActionLink to="/">Voltar para a busca</ActionLink>
}

const spin = keyframes`
  to { transform: rotate(360deg); }
`

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  padding: 80px 24px;
`

const Spinner = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-top-color: ${({ theme }) => theme.colors.accent};
  animation: ${spin} 0.8s linear infinite;
`

const IconWrap = styled.div`
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.dim};
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 20px;
  font-weight: 700;
`

const Muted = styled.p`
  color: ${({ theme }) => theme.colors.dim};
  max-width: 420px;
`

const ActionLink = styled(Link)`
  margin-top: 4px;
  padding: 10px 18px;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.bg};
  font-weight: 600;
`

import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 20px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 28px 40px;
  }
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dim};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const Prompt = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
`

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dim};
`

export const OwnerAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export const RepoName = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 30px;
  font-weight: 700;
`

export const Description = styled.p`
  max-width: 720px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dim};
`

export const StatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Chip = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`

export const ChipIcon = styled.div`
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.accent};
`

export const ChipText = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChipValue = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 18px;
  font-weight: 700;
`

export const ChipLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dim};
`

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 300px;
  }
`

export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
`

export const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 16px;
  font-weight: 700;
`

export const DetailRow = styled.div<{ $last?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 0;
  border-bottom: ${({ $last, theme }) =>
    $last ? 'none' : `1px solid ${theme.colors.border}`};
`

export const DetailLabel = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.dim};
`

export const DetailValue = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  font-weight: 600;
`

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const TopicsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
`

export const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const Pill = styled.span`
  padding: 5px 11px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.accentSoft};
  border: 1px solid ${({ theme }) => theme.colors.accentBorder};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.accent};
`

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 22px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.bg};
  font-weight: 700;

  &:hover {
    filter: brightness(1.05);
  }
`

export const GhostButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 22px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

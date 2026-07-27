import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BookMarked, Star, ChevronRight } from 'lucide-react'
import { formatCount, relativeTime } from '../utils/format'
import { languageColor } from '../utils/languageColors'

export function RepoCard({ repo, username }) {
  return (
    <Card to={`/user/${username}/repo/${repo.name}`}>
      <Info>
        <NameRow>
          <BookMarked size={15} />
          <Name>{repo.name}</Name>
        </NameRow>
        {repo.description && <Description>{repo.description}</Description>}
      </Info>

      <Meta>
        <MetaItem>
          <Star size={14} color="#E3B341" />
          <Mono>{formatCount(repo.stargazers_count)}</Mono>
        </MetaItem>
        {repo.language && (
          <MetaItem>
            <Dot $color={languageColor(repo.language)} />
            <span>{repo.language}</span>
          </MetaItem>
        )}
        <Updated>atualizado {relativeTime(repo.updated_at)}</Updated>
        <ChevronRight size={18} />
      </Meta>
    </Card>
  )
}

const Card = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  padding: 14px 18px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  transition: border-color 0.15s ease, transform 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-width: 200px;
`

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.accent};
`

const Name = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 15px;
  font-weight: 600;
`

const Description = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.dim};
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  color: ${({ theme }) => theme.colors.dim};
`

const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
`

const Mono = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  color: ${({ theme }) => theme.colors.text};
`

const Dot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`

const Updated = styled.span`
  font-size: 12px;
`

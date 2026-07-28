import { BookMarked, Star, ChevronRight } from 'lucide-react'
import type { GitHubRepo } from '@/shared/types/github'
import { formatCount, relativeTime } from '@/shared/utils/format'
import { languageColor } from '@/shared/utils/languageColors'
import * as S from './style'

interface RepoCardProps {
  repo: GitHubRepo
  username: string
}

export function RepoCard({ repo, username }: RepoCardProps) {
  return (
    <S.Card to={`/user/${username}/repo/${repo.name}`}>
      <S.Info>
        <S.NameRow>
          <BookMarked size={15} />
          <S.Name>{repo.name}</S.Name>
        </S.NameRow>
        {repo.description && <S.Description>{repo.description}</S.Description>}
      </S.Info>

      <S.Meta>
        <S.MetaItem>
          <Star size={14} color="#E3B341" />
          <S.Mono>{formatCount(repo.stargazers_count)}</S.Mono>
        </S.MetaItem>
        {repo.language && (
          <S.MetaItem>
            <S.Dot $color={languageColor(repo.language)} />
            <span>{repo.language}</span>
          </S.MetaItem>
        )}
        <S.Updated>atualizado {relativeTime(repo.updated_at)}</S.Updated>
        <ChevronRight size={18} />
      </S.Meta>
    </S.Card>
  )
}

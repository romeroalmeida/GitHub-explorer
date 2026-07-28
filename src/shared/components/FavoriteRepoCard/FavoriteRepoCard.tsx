import { Star, X } from 'lucide-react'
import type { FavoriteRepo } from '@/shared/types/favorite'
import { formatCount } from '@/shared/utils/format'
import { languageColor } from '@/shared/utils/languageColors'
import { useFavoritesStore } from '@/state/useFavoritesStore'
import * as S from './style'

export function FavoriteRepoCard({ repo }: { repo: FavoriteRepo }) {
  const remove = useFavoritesStore((state) => state.remove)

  return (
    <S.Card>
      <S.Body to={`/user/${repo.ownerLogin}/repo/${repo.name}`}>
        <S.Header>
          <S.Avatar src={repo.ownerAvatar} alt="" />
          <S.Name>
            {repo.ownerLogin}/{repo.name}
          </S.Name>
        </S.Header>
        {repo.description && <S.Description>{repo.description}</S.Description>}
        <S.Meta>
          <S.MetaItem>
            <Star size={13} color="#E3B341" />
            <S.Mono>{formatCount(repo.stargazers_count)}</S.Mono>
          </S.MetaItem>
          {repo.language && (
            <S.MetaItem>
              <S.Dot $color={languageColor(repo.language)} />
              <span>{repo.language}</span>
            </S.MetaItem>
          )}
        </S.Meta>
      </S.Body>
      <S.RemoveButton
        type="button"
        onClick={() => remove(repo.id)}
        aria-label={`Remover ${repo.name} dos favoritos`}
        title="Remover dos favoritos"
      >
        <X size={16} />
      </S.RemoveButton>
    </S.Card>
  )
}

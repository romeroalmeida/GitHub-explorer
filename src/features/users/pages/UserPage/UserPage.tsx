import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserX, FolderGit2 } from 'lucide-react'
import { Loader, StateMessage, BackHomeLink } from '@/shared/components'
import { isNotFound } from '@/shared/utils/http'
import { useUser } from '../../hooks/useUser'
import { useUserRepos } from '../../hooks/useUserRepos'
import { UserCard } from '../../components/UserCard/UserCard'
import { RepoCard } from '../../components/RepoCard/RepoCard'
import { SortControls } from '../../components/SortControls/SortControls'
import { sortRepos, type RepoSort } from '../../utils/sortRepos'
import * as S from './style'

export function UserPage() {
  const { username = '' } = useParams()
  const userQuery = useUser(username)
  const reposQuery = useUserRepos(username)
  const [sort, setSort] = useState<RepoSort>({ field: 'stars', direction: 'desc' })

  const sortedRepos = useMemo(
    () => sortRepos(reposQuery.data ?? [], sort.field, sort.direction),
    [reposQuery.data, sort],
  )

  if (userQuery.isLoading || reposQuery.isLoading) {
    return <Loader label={`Buscando @${username}...`} />
  }

  if (userQuery.isError) {
    return isNotFound(userQuery.error) ? (
      <StateMessage
        icon={<UserX size={26} />}
        title="Usuário não encontrado"
        description={`Não encontramos ninguém com o login "${username}" no GitHub.`}
        action={<BackHomeLink />}
      />
    ) : (
      <StateMessage
        icon={<UserX size={26} />}
        title="Não foi possível carregar"
        description="Talvez o limite de requisições da API do GitHub tenha sido atingido. Tente novamente em instantes."
        action={<BackHomeLink />}
      />
    )
  }

  const user = userQuery.data!

  return (
    <S.Container>
      <S.Grid>
        <UserCard user={user} />

        <S.Section>
          <S.Header>
            <S.TitleGroup>
              <S.SectionTitle>Repositórios</S.SectionTitle>
              <S.Count>{user.public_repos}</S.Count>
            </S.TitleGroup>
            {sortedRepos.length > 0 && (
              <SortControls value={sort} onChange={setSort} />
            )}
          </S.Header>

          {sortedRepos.length === 0 ? (
            <StateMessage
              icon={<FolderGit2 size={26} />}
              title="Nenhum repositório público"
              description={`@${user.login} ainda não tem repositórios públicos.`}
            />
          ) : (
            <S.List>
              {sortedRepos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} username={username} />
              ))}
            </S.List>
          )}
        </S.Section>
      </S.Grid>
    </S.Container>
  )
}

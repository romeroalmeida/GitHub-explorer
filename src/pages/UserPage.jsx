import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { UserX, FolderGit2 } from 'lucide-react'
import { useUser, useUserRepos, isNotFound } from '../hooks/queries'
import { UserCard } from '../components/UserCard'
import { RepoCard } from '../components/RepoCard'
import { SortControls } from '../components/SortControls'
import { Loader, StateMessage, BackHomeLink } from '../components/Feedback'
import { sortRepos } from '../utils/sortRepos'

export function UserPage() {
  const { username } = useParams()
  const userQuery = useUser(username)
  const reposQuery = useUserRepos(username)
  const [sort, setSort] = useState({ field: 'stars', direction: 'desc' })

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

  const user = userQuery.data

  return (
    <Container>
      <Grid>
        <UserCard user={user} />

        <Section>
          <Header>
            <TitleGroup>
              <SectionTitle>Repositórios</SectionTitle>
              <Count>{user.public_repos}</Count>
            </TitleGroup>
            {sortedRepos.length > 0 && (
              <SortControls
                field={sort.field}
                direction={sort.direction}
                onChange={setSort}
              />
            )}
          </Header>

          {sortedRepos.length === 0 ? (
            <StateMessage
              icon={<FolderGit2 size={26} />}
              title="Nenhum repositório público"
              description={`@${user.login} ainda não tem repositórios públicos.`}
            />
          ) : (
            <List>
              {sortedRepos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} username={username} />
              ))}
            </List>
          )}
        </Section>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 20px;

  @media (min-width: 768px) {
    padding: 28px 40px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 992px) {
    grid-template-columns: 320px 1fr;
    align-items: start;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 19px;
  font-weight: 700;
`

const Count = styled.span`
  padding: 3px 9px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.accentSoft};
  border: 1px solid ${({ theme }) => theme.colors.accentBorder};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

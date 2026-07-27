import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import {
  Star,
  GitFork,
  Eye,
  CircleDot,
  ExternalLink,
  User,
  PackageX,
} from 'lucide-react'
import { useRepo, isNotFound } from '../hooks/queries'
import { Loader, StateMessage, BackHomeLink } from '../components/Feedback'
import { formatCount, formatDate, relativeTime } from '../utils/format'

export function RepoPage() {
  const { username, repo: repoName } = useParams()
  const { data: repo, isLoading, isError, error } = useRepo(username, repoName)

  if (isLoading) return <Loader label={`Carregando ${repoName}...`} />

  if (isError) {
    return (
      <StateMessage
        icon={<PackageX size={26} />}
        title={isNotFound(error) ? 'Repositório não encontrado' : 'Não foi possível carregar'}
        description={
          isNotFound(error)
            ? `O repositório "${username}/${repoName}" não existe ou é privado.`
            : 'Tente novamente em instantes.'
        }
        action={<BackHomeLink />}
      />
    )
  }

  const stats = [
    { icon: <Star size={18} color="#E3B341" />, value: repo.stargazers_count, label: 'estrelas' },
    { icon: <GitFork size={18} />, value: repo.forks_count, label: 'forks' },
    { icon: <Eye size={18} />, value: repo.subscribers_count, label: 'watchers' },
    { icon: <CircleDot size={18} />, value: repo.open_issues_count, label: 'issues' },
  ]

  const details = [
    { label: 'linguagem', value: repo.language || '—' },
    { label: 'licença', value: repo.license?.spdx_id || 'Sem licença' },
    { label: 'branch_padrão', value: repo.default_branch },
    { label: 'criado_em', value: formatDate(repo.created_at) },
    { label: 'atualizado', value: relativeTime(repo.updated_at) },
  ]

  return (
    <Container>
      <Inner>
        <Head>
          <BackLink to={`/user/${username}`}>
            <Prompt>cd ..</Prompt>
            <span>voltar para os repositórios</span>
          </BackLink>
          <Breadcrumb>
            <OwnerAvatar src={repo.owner.avatar_url} alt="" />
            <span>{repo.owner.login} /</span>
            <RepoName>{repo.name}</RepoName>
          </Breadcrumb>
          <Title>{repo.name}</Title>
          {repo.description && <Description>{repo.description}</Description>}
        </Head>

        <StatRow>
          {stats.map((stat) => (
            <Chip key={stat.label}>
              <ChipIcon>{stat.icon}</ChipIcon>
              <ChipText>
                <ChipValue>{formatCount(stat.value)}</ChipValue>
                <ChipLabel>{stat.label}</ChipLabel>
              </ChipText>
            </Chip>
          ))}
        </StatRow>

        <Columns>
          <DetailsCard>
            <CardTitle>Detalhes</CardTitle>
            {details.map((row, index) => (
              <DetailRow key={row.label} $last={index === details.length - 1}>
                <DetailLabel>{row.label}</DetailLabel>
                <DetailValue>{row.value}</DetailValue>
              </DetailRow>
            ))}
          </DetailsCard>

          <Side>
            {repo.topics?.length > 0 && (
              <TopicsCard>
                <CardTitle>Tópicos</CardTitle>
                <Pills>
                  {repo.topics.slice(0, 8).map((topic) => (
                    <Pill key={topic}>{topic}</Pill>
                  ))}
                </Pills>
              </TopicsCard>
            )}
            <PrimaryButton href={repo.html_url} target="_blank" rel="noreferrer">
              <ExternalLink size={16} />
              Ver no GitHub
            </PrimaryButton>
            <GhostButton to={`/user/${username}`}>
              <User size={16} />
              Ver perfil de {repo.owner.login}
            </GhostButton>
          </Side>
        </Columns>
      </Inner>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 28px 20px;

  @media (min-width: 768px) {
    padding: 28px 40px;
  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const BackLink = styled(Link)`
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

const Prompt = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
`

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dim};
`

const OwnerAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
`

const RepoName = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 30px;
  font-weight: 700;
`

const Description = styled.p`
  max-width: 720px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dim};
`

const StatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Chip = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`

const ChipIcon = styled.div`
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.accent};
`

const ChipText = styled.div`
  display: flex;
  flex-direction: column;
`

const ChipValue = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 18px;
  font-weight: 700;
`

const ChipLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dim};
`

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 300px;
  }
`

const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
`

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 16px;
  font-weight: 700;
`

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 9px 0;
  border-bottom: ${({ $last, theme }) =>
    $last ? 'none' : `1px solid ${theme.colors.border}`};
`

const DetailLabel = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.dim};
`

const DetailValue = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  font-weight: 600;
`

const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const TopicsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
`

const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Pill = styled.span`
  padding: 5px 11px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.accentSoft};
  border: 1px solid ${({ theme }) => theme.colors.accentBorder};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.accent};
`

const PrimaryButton = styled.a`
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

const GhostButton = styled(Link)`
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

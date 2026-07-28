import { useParams } from 'react-router-dom'
import {
  Star,
  GitFork,
  Eye,
  CircleDot,
  ExternalLink,
  User,
  PackageX,
} from 'lucide-react'
import { Loader, StateMessage, BackHomeLink, FavoriteButton } from '@/shared/components'
import { isNotFound } from '@/shared/utils/http'
import { formatCount, formatDate, relativeTime } from '@/shared/utils/format'
import { toFavorite } from '@/shared/utils/favorites'
import { useRepository } from '../../hooks/useRepository'
import * as S from './style'

export function RepoPage() {
  const { username = '', repo: repoName = '' } = useParams()
  const { data: repo, isLoading, isError, error } = useRepository(username, repoName)

  if (isLoading) return <Loader label={`Carregando ${repoName}...`} />

  if (isError || !repo) {
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
    { label: 'Linguagem', value: repo.language || '—' },
    { label: 'Licença', value: repo.license?.spdx_id || 'Sem licença' },
    { label: 'Branch Padrão', value: repo.default_branch },
    { label: 'Criado Em', value: formatDate(repo.created_at) },
    { label: 'Atualizado', value: relativeTime(repo.updated_at) },
  ]

  return (
    <S.Container>
      <S.Inner>
        <S.Head>
          <S.BackLink to={`/user/${username}`}>
            <S.Prompt>cd ..</S.Prompt>
            <span>voltar para os repositórios</span>
          </S.BackLink>
          <S.Breadcrumb>
            <S.OwnerAvatar src={repo.owner.avatar_url} alt="" />
            <span>{repo.owner.login} /</span>
            <S.RepoName>{repo.name}</S.RepoName>
          </S.Breadcrumb>
          <S.Title>{repo.name}</S.Title>
          {repo.description && <S.Description>{repo.description}</S.Description>}
        </S.Head>

        <S.StatRow>
          {stats.map((stat) => (
            <S.Chip key={stat.label}>
              <S.ChipIcon>{stat.icon}</S.ChipIcon>
              <S.ChipText>
                <S.ChipValue>{formatCount(stat.value)}</S.ChipValue>
                <S.ChipLabel>{stat.label}</S.ChipLabel>
              </S.ChipText>
            </S.Chip>
          ))}
        </S.StatRow>

        <S.Columns>
          <S.DetailsCard>
            <S.CardTitle>Detalhes</S.CardTitle>
            {details.map((row, index) => (
              <S.DetailRow key={row.label} $last={index === details.length - 1}>
                <S.DetailLabel>{row.label}</S.DetailLabel>
                <S.DetailValue>{row.value}</S.DetailValue>
              </S.DetailRow>
            ))}
          </S.DetailsCard>

          <S.Side>
            {repo.topics?.length > 0 && (
              <S.TopicsCard>
                <S.CardTitle>Tópicos</S.CardTitle>
                <S.Pills>
                  {repo.topics.slice(0, 8).map((topic) => (
                    <S.Pill key={topic}>{topic}</S.Pill>
                  ))}
                </S.Pills>
              </S.TopicsCard>
            )}
            <S.PrimaryButton href={repo.html_url} target="_blank" rel="noreferrer">
              <ExternalLink size={16} />
              Ver no GitHub
            </S.PrimaryButton>
            <FavoriteButton repo={toFavorite(repo)} />
            <S.GhostButton to={`/user/${username}`}>
              <User size={16} />
              Ver perfil de {repo.owner.login}
            </S.GhostButton>
          </S.Side>
        </S.Columns>
      </S.Inner>
    </S.Container>
  )
}

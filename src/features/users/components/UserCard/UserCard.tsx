import { Mail, MapPin, Link as LinkIcon } from 'lucide-react'
import type { GitHubUser } from '@/shared/types/github'
import { formatCount } from '@/shared/utils/format'
import * as S from './style'

const normalizeUrl = (value: string) => {
  const href = value.startsWith('http') ? value : `https://${value}`
  return { href, label: value.replace(/^https?:\/\//, '') }
}

export function UserCard({ user }: { user: GitHubUser }) {
  const stats = [
    { value: user.followers, label: 'seguidores' },
    { value: user.following, label: 'seguindo' },
    { value: user.public_repos, label: 'repos' },
  ]

  const blog = user.blog ? normalizeUrl(user.blog) : null

  return (
    <S.Card>
      <S.Avatar src={user.avatar_url} alt={`Avatar de ${user.login}`} />
      <S.Identity>
        <S.Name>{user.name || user.login}</S.Name>
        <S.Login href={user.html_url} target="_blank" rel="noreferrer">
          @{user.login}
        </S.Login>
      </S.Identity>

      {user.bio && <S.Bio>{user.bio}</S.Bio>}

      <S.Stats>
        {stats.map((stat) => (
          <S.Stat key={stat.label}>
            <S.StatValue>{formatCount(stat.value)}</S.StatValue>
            <S.StatLabel>{stat.label}</S.StatLabel>
          </S.Stat>
        ))}
      </S.Stats>

      <S.MetaList>
        {user.email && (
          <S.MetaItem>
            <Mail size={15} />
            <span>{user.email}</span>
          </S.MetaItem>
        )}
        {user.location && (
          <S.MetaItem>
            <MapPin size={15} />
            <span>{user.location}</span>
          </S.MetaItem>
        )}
        {blog && (
          <S.MetaItem>
            <LinkIcon size={15} />
            <S.MetaLink href={blog.href} target="_blank" rel="noreferrer">
              {blog.label}
            </S.MetaLink>
          </S.MetaItem>
        )}
      </S.MetaList>
    </S.Card>
  )
}

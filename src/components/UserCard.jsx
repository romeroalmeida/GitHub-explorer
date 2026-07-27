import styled from 'styled-components'
import { Mail, MapPin, LinkIcon } from 'lucide-react'
import { formatCount } from '../utils/format'

export function UserCard({ user }) {
  const stats = [
    { value: user.followers, label: 'seguidores' },
    { value: user.following, label: 'seguindo' },
    { value: user.public_repos, label: 'repos' },
  ]

  const blog = user.blog ? normalizeUrl(user.blog) : null

  return (
    <Card>
      <Avatar src={user.avatar_url} alt={`Avatar de ${user.login}`} />
      <Identity>
        <Name>{user.name || user.login}</Name>
        <Login
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
        >
          @{user.login}
        </Login>
      </Identity>

      {user.bio && <Bio>{user.bio}</Bio>}

      <Stats>
        {stats.map((stat) => (
          <Stat key={stat.label}>
            <StatValue>{formatCount(stat.value)}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
          </Stat>
        ))}
      </Stats>

      <MetaList>
        {user.email && (
          <MetaItem>
            <Mail size={15} />
            <span>{user.email}</span>
          </MetaItem>
        )}
        {user.location && (
          <MetaItem>
            <MapPin size={15} />
            <span>{user.location}</span>
          </MetaItem>
        )}
        {blog && (
          <MetaItem>
            <LinkIcon size={15} />
            <MetaLink href={blog.href} target="_blank" rel="noreferrer">
              {blog.label}
            </MetaLink>
          </MetaItem>
        )}
      </MetaList>
    </Card>
  )
}

const normalizeUrl = (value) => {
  const href = value.startsWith('http') ? value : `https://${value}`
  return { href, label: value.replace(/^https?:\/\//, '') }
}

const Card = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 26px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
`

const Avatar = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.border};
`

const Identity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Name = styled.h1`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 21px;
  font-weight: 700;
`

const Login = styled.a`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dim};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

const Bio = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dim};
`

const Stats = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.panel2};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`

const Stat = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  padding: 12px 6px;

  & + & {
    border-left: 1px solid ${({ theme }) => theme.colors.border};
  }
`

const StatValue = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 16px;
  font-weight: 700;
`

const StatLabel = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.dim};
`

const MetaList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 11px;
  list-style: none;
`

const MetaItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.dim};
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const MetaLink = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

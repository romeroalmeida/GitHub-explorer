import { useQuery } from '@tanstack/react-query'
import { getUser, getUserRepos, getRepo } from '../api/github'

export const isNotFound = (error) => error?.response?.status === 404

const retry = (failureCount, error) => (isNotFound(error) ? false : failureCount < 2)

export const useUser = (username) =>
  useQuery({
    queryKey: ['user', username],
    queryFn: () => getUser(username),
    enabled: Boolean(username),
    retry,
  })

export const useUserRepos = (username) =>
  useQuery({
    queryKey: ['repos', username],
    queryFn: () => getUserRepos(username),
    enabled: Boolean(username),
    retry,
  })

export const useRepo = (owner, name) =>
  useQuery({
    queryKey: ['repo', owner, name],
    queryFn: () => getRepo(owner, name),
    enabled: Boolean(owner && name),
    retry,
  })

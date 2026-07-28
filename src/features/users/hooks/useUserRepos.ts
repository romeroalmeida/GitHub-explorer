import { useQuery } from '@tanstack/react-query'
import { queryRetry } from '@/shared/utils/http'
import { getUserRepos } from '../services/usersService'

export function useUserRepos(username: string) {
  return useQuery({
    queryKey: ['repos', username],
    queryFn: () => getUserRepos(username),
    enabled: Boolean(username),
    retry: queryRetry,
  })
}

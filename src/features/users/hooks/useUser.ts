import { useQuery } from '@tanstack/react-query'
import { queryRetry } from '@/shared/utils/http'
import { getUser } from '../services/usersService'

export function useUser(username: string) {
  return useQuery({
    queryKey: ['user', username],
    queryFn: () => getUser(username),
    enabled: Boolean(username),
    retry: queryRetry,
  })
}

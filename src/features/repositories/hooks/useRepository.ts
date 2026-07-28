import { useQuery } from '@tanstack/react-query'
import { queryRetry } from '@/shared/utils/http'
import { getRepository } from '../services/repositoriesService'

export function useRepository(owner: string, name: string) {
  return useQuery({
    queryKey: ['repo', owner, name],
    queryFn: () => getRepository(owner, name),
    enabled: Boolean(owner && name),
    retry: queryRetry,
  })
}

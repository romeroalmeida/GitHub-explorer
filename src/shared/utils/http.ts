import { AxiosError } from 'axios'

export const isNotFound = (error: unknown): boolean =>
  error instanceof AxiosError && error.response?.status === 404

// Não insiste em recursos inexistentes; nos demais casos tenta mais duas vezes.
export const queryRetry = (failureCount: number, error: unknown): boolean =>
  isNotFound(error) ? false : failureCount < 2

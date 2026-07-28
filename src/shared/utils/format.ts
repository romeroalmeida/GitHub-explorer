const countFormatter = new Intl.NumberFormat('pt-BR', {
  notation: 'compact',
  maximumFractionDigits: 1,
})

export const formatCount = (value: number | null | undefined): string =>
  countFormatter.format(value ?? 0)

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})

export const formatDate = (iso: string | null | undefined): string =>
  iso ? dateFormatter.format(new Date(iso)) : '—'

const relativeFormatter = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' })

const DIVISIONS: { amount: number; unit: Intl.RelativeTimeFormatUnit }[] = [
  { amount: 60, unit: 'second' },
  { amount: 60, unit: 'minute' },
  { amount: 24, unit: 'hour' },
  { amount: 7, unit: 'day' },
  { amount: 4.34524, unit: 'week' },
  { amount: 12, unit: 'month' },
  { amount: Number.POSITIVE_INFINITY, unit: 'year' },
]

export const relativeTime = (iso: string | null | undefined): string => {
  if (!iso) return '—'
  let duration = (new Date(iso).getTime() - Date.now()) / 1000
  for (const division of DIVISIONS) {
    if (Math.abs(duration) < division.amount) {
      return relativeFormatter.format(Math.round(duration), division.unit)
    }
    duration /= division.amount
  }
  return '—'
}

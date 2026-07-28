import { ArrowUpDown, ArrowDown, ArrowUp } from 'lucide-react'
import type { RepoSort, SortField } from '../../utils/sortRepos'
import * as S from './style'

const SORT_FIELDS: { value: SortField; label: string }[] = [
  { value: 'stars', label: 'Estrelas' },
  { value: 'name', label: 'Nome' },
  { value: 'updated', label: 'Atualização' },
]

interface SortControlsProps {
  value: RepoSort
  onChange: (value: RepoSort) => void
}

export function SortControls({ value, onChange }: SortControlsProps) {
  const toggleDirection = () =>
    onChange({ ...value, direction: value.direction === 'asc' ? 'desc' : 'asc' })

  return (
    <S.Wrapper>
      <S.SelectWrap>
        <ArrowUpDown size={15} />
        <S.Select
          value={value.field}
          onChange={(e) => onChange({ ...value, field: e.target.value as SortField })}
          aria-label="Ordenar repositórios por"
        >
          {SORT_FIELDS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </S.Select>
      </S.SelectWrap>
      <S.DirectionButton
        type="button"
        onClick={toggleDirection}
        aria-label={value.direction === 'asc' ? 'Ordem crescente' : 'Ordem decrescente'}
      >
        {value.direction === 'asc' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
      </S.DirectionButton>
    </S.Wrapper>
  )
}

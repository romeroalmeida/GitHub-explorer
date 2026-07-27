import styled from 'styled-components'
import { ArrowUpDown, ArrowDown, ArrowUp } from 'lucide-react'

export const SORT_FIELDS = [
  { value: 'stars', label: 'Estrelas' },
  { value: 'name', label: 'Nome' },
  { value: 'updated', label: 'Atualização' },
]

export function SortControls({ field, direction, onChange }) {
  const toggleDirection = () =>
    onChange({ field, direction: direction === 'asc' ? 'desc' : 'asc' })

  return (
    <Wrapper>
      <SelectWrap>
        <ArrowUpDown size={15} />
        <Select
          value={field}
          onChange={(e) => onChange({ field: e.target.value, direction })}
          aria-label="Ordenar repositórios por"
        >
          {SORT_FIELDS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </SelectWrap>
      <DirectionButton
        type="button"
        onClick={toggleDirection}
        aria-label={direction === 'asc' ? 'Ordem crescente' : 'Ordem decrescente'}
      >
        {direction === 'asc' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
      </DirectionButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.dim};
`

const Select = styled.select`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  outline: none;
  cursor: pointer;

  option {
    background: ${({ theme }) => theme.colors.panel};
  }
`

const DirectionButton = styled.button`
  display: grid;
  place-items: center;
  padding: 9px;
  background: ${({ theme }) => theme.colors.panel};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.dim};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getPageItems } from '@/shared/utils/pagination'
import * as S from './style'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  const items = getPageItems(currentPage, totalPages)

  return (
    <S.Nav aria-label="Paginação dos repositórios">
      <S.Button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <ChevronLeft size={16} />
      </S.Button>

      {items.map((item, index) =>
        item === 'ellipsis' ? (
          <S.Ellipsis key={`ellipsis-${index}`}>…</S.Ellipsis>
        ) : (
          <S.Button
            key={item}
            type="button"
            $active={item === currentPage}
            aria-current={item === currentPage ? 'page' : undefined}
            onClick={() => onPageChange(item)}
          >
            {item}
          </S.Button>
        ),
      )}

      <S.Button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Próxima página"
      >
        <ChevronRight size={16} />
      </S.Button>
    </S.Nav>
  )
}

import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 20px;

  @media (min-width: 768px) {
    padding: 28px 40px;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 992px) {
    grid-template-columns: 320px 1fr;
    align-items: start;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.display};
  font-size: 19px;
  font-weight: 700;
`

export const Count = styled.span`
  padding: 3px 9px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.accentSoft};
  border: 1px solid ${({ theme }) => theme.colors.accentBorder};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

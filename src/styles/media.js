import { css } from 'styled-components'

// Breakpoints alinhados aos do Bootstrap.
const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}

export const up = (key) => (...args) => css`
  @media (min-width: ${breakpoints[key]}px) {
    ${css(...args)}
  }
`

export const down = (key) => (...args) => css`
  @media (max-width: ${breakpoints[key] - 0.02}px) {
    ${css(...args)}
  }
`

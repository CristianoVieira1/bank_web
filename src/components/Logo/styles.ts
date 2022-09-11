import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { TLogoProps } from '.'

const modifiersSize = {
  normal: () => css`
    width: 15rem;
    height: 4.3rem;
  `,

  large: () => css`
    width: 30rem;
    height: 7.9rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
    width: 5.3rem;
    height: 4.5rem;

    svg {
      width: 30.5rem;
      pointer-events: none;
    }
    .text {
      display: none;
    }
  `}
  `
}

export const Container = styled.div<TLogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && modifiersSize[size]}
    ${!!hideOnMobile && modifiersSize.hideOnMobile}
  `}
`

import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  padding: 0 15rem;
  background: ${(props) => props.theme.base['base-hover']};
  display: flex;
  flex-direction: row;

  main {
    display: flex;
    flex-direction: column;
    gap: 4.125rem;
  }

  main,
  aside {
    width: 50%;
  }

  aside:nth-child(2) {
    display: flex;
    justify-content: center;
  }
`

export const TitleHome = styled.div`
  width: 100%;
  gap: 1rem;
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme.base['base-title']};
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme.base['base-subtitle']};
  }
`
export const AtributesCoffee = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;

  aside {
    display: flex;
    flex-direction: column;
  }
`
export const CartHomeHeader = styled.span`
  display: flex;
  flex-direction: row;

  svg {
    padding: 0.5rem;
    border-radius: 999px;
    background: ${(props) => props.theme.base['base-title']};
  }
`

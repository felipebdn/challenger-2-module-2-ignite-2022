import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  padding: 5rem 15rem 2rem;
  background: ${(props) => props.theme.base['base-hover']};
  display: flex;
  flex-direction: row;
  align-items: center;

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
    gap: 1.25rem;
  }
`
interface Props {
  color: string
}

export const CartHomeHeader = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  div {
    padding: 0.5rem;
    background: ${(props) => props.color};
    border-radius: 999px;
    display: flex;

    svg {
      color: ${(props) => props.theme.base.white};
    }
  }
`
export const HomeCoffees = styled.div`
  width: 100%;
  padding: 2rem 15rem;
  background: ${(props) => props.theme.base['base-hover']};
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme.base['base-subtitle']};
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 2rem;
  }
`
export const CartCoffes = styled.div`
  background: ${(props) => props.theme.base['base-card']};
  width: 25%;
`

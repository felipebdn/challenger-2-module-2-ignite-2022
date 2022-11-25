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
  gap: 2.125rem;

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

    gap: 3rem 2rem;
  }
`
export const CartCoffes = styled.div`
  background: ${(props) => props.theme.base['base-card']};
  width: calc((25% - 2rem) + (2rem / 4));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.25rem;
  height: 23rem;
`
export const HeaderCoffees = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -2.75rem;
  gap: 0.75rem;

  img {
    width: 7.5rem;
  }

  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25rem;

    span {
      padding: 0.25rem 0.5rem;
      background: ${(props) => props.theme.produto['yellow-light']};
      color: ${(props) => props.theme.produto['yellow-dark']};
      text-transform: uppercase;
      font-size: 0.8rem;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
      border-radius: 100px;

      /* flex: none;
      order: 0;
      flex-grow: 0; */
    }
  }
  h2 {
    margin-top: 0.5rem;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme.base['base-subtitle']};
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    /* or 18px */

    text-align: center;
    color: ${(props) => props.theme.base['base-label']};
  }
`
export const FooterCoffees = styled.div`
  display: flex;
  align-items: center;
  gap: 1.43rem;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    /* or 1.125rem */

    text-align: right;
    color: ${(props) => props.theme.base['base-text']};

    span {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 130%;
      /* or 1.93rem */

      text-align: right;
    }
  }
  div {
    display: flex;
    gap: 0.5rem;
  }
`
export const InputNumber = styled.div`
  display: flex;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0 !important;
  background: ${(props) => props.theme.base['base-button']};

  input,
  button {
    border: none;
    background: none;
  }
  button {
    display: flex;
    align-items: center;
    outline: none;
  }

  input {
    max-width: 50px;

    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme.base['base-title']};

    -webkit-appearance: textfield !important;
    -moz-appearance: textfield !important;
    appearance: textfield !important;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
`

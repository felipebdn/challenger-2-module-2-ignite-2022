import styled from 'styled-components'

export const SuccessContainer = styled.section`
  padding: 2rem 15rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`
export const TituloOrderSuccess = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme.produto['yellow-dark']};
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 130%;
  }
`
export const MainRequestOrder = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    max-width: 50%;
    height: fit-content;
  }
`
export const CardInfoSuccess = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to bottom right,
        ${(props) => props.theme.produto.yellow},
        ${(props) => props.theme.produto.purple}
      )
      border-box;
  border-radius: 6px 36px;
  border: 2px solid transparent;
  /* height: fit-content; */

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }
  div:nth-child(1) {
    span {
      display: flex;
      padding: 0.5rem;
      border-radius: 999px;
      background: ${(props) => props.theme.produto.purple};
      color: ${(props) => props.theme.base.white};
    }
  }
  div:nth-child(2) {
    span {
      display: flex;
      padding: 0.5rem;
      border-radius: 999px;
      background: ${(props) => props.theme.produto.yellow};
      color: ${(props) => props.theme.base.white};
    }
  }
  div:nth-child(3) {
    span {
      display: flex;
      padding: 0.5rem;
      border-radius: 999px;
      background: ${(props) => props.theme.produto['yellow-dark']};
      color: ${(props) => props.theme.base.white};
    }
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme.base['base-text']};
    b {
      font-weight: 700;
      color: ${(props) => props.theme.base['base-subtitle']};
    }
  }
`

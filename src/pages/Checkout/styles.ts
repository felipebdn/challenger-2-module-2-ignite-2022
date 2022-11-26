import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 5rem 15rem;
  gap: 2rem;

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 130%;
    }
  }
`

export const CheckoutLeft = styled.main`
  width: 60%;
`
export const CheckoutRight = styled.main`
  width: 40%;
`

const BaseInfoCheckout = styled.div`
  background: ${(props) => props.theme.base['base-card']};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FormEndereco = styled(BaseInfoCheckout)`
  padding: 2.5rem;
  border-radius: 6px;

  aside {
    display: flex;
    gap: 0.5rem;
    svg {
      color: ${(props) => props.theme.produto['yellow-dark']};
    }
    div {
      display: flex;
      flex-direction: column;
    }

    h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme.base['base-subtitle']};
    }
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme.base['base-text']};
    }
  }
`
export const InputsForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100% !important;

  input {
    background: ${(props) => props.theme.base['base-input']};
    padding: 0.75rem;
    border: 1px solid ${(props) => props.theme.base['base-button']};
    border-radius: 4px;
    outline: none;
    width: 100% !important;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme.base['base-text']};

    &::placeholder {
      font-family: 'Roboto';
      font-style: normal;
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme.base['base-label']};
    }
  }

  div {
    display: flex;
    gap: 1rem;
  }
`
export const FormPayment = styled(BaseInfoCheckout)`
  padding: 2.5rem;
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;
    svg {
      color: ${(props) => props.theme.produto.purple};
    }
    div {
      display: flex;
      flex-direction: column;
    }

    h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme.base['base-subtitle']};
    }
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme.base['base-text']};
    }
  }

  main {
    width: 100% !important;
    display: flex !important;
    flex-direction: row !important;
    gap: 0.75rem;

    button {
      width: calc((100% / 3) - 0.75rem + (0.75rem / 3)) !important;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      border-radius: 6px;
      cursor: pointer;
      border: none;

      background: ${(props) => props.theme.base['base-button']};

      svg {
        color: ${(props) => props.theme.produto.purple};
      }
      span {
        text-transform: uppercase;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 160%;
        color: ${(props) => props.theme.base['base-text']};
      }
    }
  }
`
export const FormOrder = styled(BaseInfoCheckout)`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-radius: 6px 44px;
`
export const CoffeeCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.base['base-button']};
  gap: 1.125rem;
  img {
    width: 4rem;
  }
`

export const BlocoInfoCoffee = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
    h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme.base['base-subtitle']};
    }
    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme.base['base-title']};
    }
  }

  main {
    display: flex;
    flex-direction: row;
  }
`
export const RemoverButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  border: none;
  background: ${(props) => props.theme.base['base-button']};
  border-radius: 6px;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.produto.purple};
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;

    text-transform: uppercase;
  }
`
export const ValuesOrderCoffees = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  div {
    display: flex;
    justify-content: space-between;

    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme.base['base-text']};
    }
    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme.base['base-text']};
    }
  }
  div:nth-child(3) {
    p,
    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme.base['base-subtitle']};
    }
  }

  button {
    padding: 0.75rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 6px;
    border: none;
    background: ${(props) => props.theme.produto.yellow};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme.base.white};
  }
`

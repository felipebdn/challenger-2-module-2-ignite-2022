import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 5rem 15rem;
  gap: 2rem;

  main:nth-child(1) {
    width: 60%;
  }
  main:nth-child(2) {
    width: 40%;
  }
`

const BaseInfoCheckout = styled.div`
  background: ${(props) => props.theme.base['base-card']};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FormEndereco = styled(BaseInfoCheckout)`
  header {
    display: flex;
    div {
      display: flex;
      flex-direction: column;
    }
  }
`
export const FormPayment = styled(BaseInfoCheckout)``
export const FormOrder = styled(BaseInfoCheckout)``
export const CoffeeCart = styled.div``

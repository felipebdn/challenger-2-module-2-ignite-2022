import styled from 'styled-components'

export const CartContainer = styled.button`
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.produto['yellow-light']};
  color: ${(props) => props.theme.produto['yellow-dark']};
  position: relative;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;

  span {
    /* display: none; */
    position: absolute;
    padding: 0.3rem;
    background: ${(props) => props.theme.produto['yellow-dark']};
    color: ${(props) => props.theme.base.white};
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 500;
    margin-top: -1.3rem;
    margin-left: 1rem;
  }
`
// export const InputNumberContainer = styled.div`
//   display: flex;
//   padding: 0.5rem;
//   border-radius: 6px;
//   gap: 0 !important;
//   background: ${(props) => props.theme.base['base-button']};
//   max-width: 7rem;

//   input,
//   button {
//     border: none;
//     background: none;
//   }
//   button {
//     display: flex;
//     align-items: center;
//     outline: none;
//     color: ${(props) => props.theme.produto.purple};
//   }

//   input {
//     max-width: 50px;

//     text-align: center;
//     font-family: 'Roboto';
//     font-style: normal;
//     font-weight: 500;
//     font-size: 1rem;
//     line-height: 130%;
//     color: ${(props) => props.theme.base['base-title']};

//     -webkit-appearance: textfield !important;
//     -moz-appearance: textfield !important;
//     appearance: textfield !important;

//     &::-webkit-inner-spin-button,
//     &::-webkit-outer-spin-button {
//       -webkit-appearance: none;
//     }
//   }
// `

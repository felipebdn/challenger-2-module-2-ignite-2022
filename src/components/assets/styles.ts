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

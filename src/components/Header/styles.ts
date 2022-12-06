import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 8rem;
  background: #262626;
  /* background: ${(props) => props.theme.base.background}; */
  display: flex;

  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
  }
`

export const LocationStyle = styled.div`
  padding: 0.5rem;
  background: ${(props) => props.theme.produto['purple-light']};
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.produto.purple};
  }

  span {
    color: ${(props) => props.theme.produto['purple-dark']};
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 130%;
  }
`
export const CartContainer = styled.div`
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
    /* min-width: 1.5rem; */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0.3rem;
    background: ${(props) => props.theme.produto['yellow-dark']};
    color: ${(props) => props.theme.base.white};
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 500;
    margin-top: -2.2rem;
    margin-left: 1.1rem;
  }
`

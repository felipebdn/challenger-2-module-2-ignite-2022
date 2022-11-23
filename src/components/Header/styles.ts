import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100vw;
  padding: 2rem 10rem;
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

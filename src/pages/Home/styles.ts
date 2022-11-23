import styled from 'styled-components'

export const HomeContainer = styled.section`
  padding: 0 10rem;
  width: 100%;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
`

export const TitulosHome = styled.div`
  width: 100%;
  h1 {
    color: ${(props) => props.theme.base['base-title']};
    font-size: 3rem;
    font-family: 'Baloo 2';
    line-height: 130%;
    font-weight: 800;
    font-style: normal;
  }
`

import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  padding: 0 15rem;
  background: ${(props) => props.theme.base['base-hover']};
`
export const SectionApresentation = styled.section`
  width: 100%;
  display: flex;
`
export const HalfSection = styled.div`
  width: 50%;
`

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: ${(props) => props.theme.base['base-title']};
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme.base['base-subtitle']};
  }
`
export const Atributos = styled.div`
  width: 100%;
  display: flex;
`

export const HalfAtributes = styled.div`
  width: 50%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
      padding: 0.5rem;
    }
  }
`

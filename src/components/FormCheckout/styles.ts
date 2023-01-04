import styled from 'styled-components'

export const InputsFormContainer = styled.div`
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

import { InputsFormContainer } from './styles'
import { useFormContext } from 'react-hook-form'

export function InputsForm() {
  const { register } = useFormContext()

  return (
    <InputsFormContainer>
      <input type="number" name="" id="" placeholder="CEP" {...register} />
      <input type="text" name="" id="" placeholder="Rua" />
      <div>
        <input type="number" name="" id="" placeholder="Número" />
        <input type="text" name="" id="" placeholder="Complemento" />
      </div>
      <div>
        <input type="text" name="" id="" placeholder="Bairro" />
        <input type="text" name="" id="" placeholder="Cidade" />
        <input type="text" name="" id="" placeholder="UF" />
      </div>
    </InputsFormContainer>
  )
}

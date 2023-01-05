import { CaretRight, MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  CartContainer,
  HeaderContainer,
  InputCepContainer,
  LocationStyle,
} from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContext'
import { useForm } from 'react-hook-form'

const cepFormValidationSchema = zod.object({
  cep: zod.number().min(8, 'Informe o seu cep').max(8),
})

type cepApi = zod.infer<typeof cepFormValidationSchema>

export function Header() {
  const { coffeesInCart, checkCep } = useContext(CoffeesContext)
  const { register, handleSubmit } = useForm<cepApi>({
    resolver: zodResolver(cepFormValidationSchema),
  })

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src="./assets/Logo.svg" alt="" />
      </NavLink>
      <div>
        <InputCepContainer onSubmit={handleSubmit(checkCep)}>
          <input placeholder="Digite seu cep" {...register('cep')} />
          <button type="submit">
            <CaretRight size={22} weight="bold" />
          </button>
        </InputCepContainer>
        <LocationStyle>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationStyle>
        <NavLink to="/checkout">
          <CartContainer>
            <ShoppingCart size={22} weight="fill" />
            <span>{coffeesInCart.length}</span>
          </CartContainer>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}

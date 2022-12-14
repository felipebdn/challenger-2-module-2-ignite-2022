import axios from 'axios'
import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  changeAmountCoffee,
  changeAmountCoffeeInCart,
  changeValueCoffeesInCart,
  deleteCoffeeInCart,
  handleStatusInCart,
  searchCep,
} from '../reducer/Coffees/actions'
import {
  AddreesProps,
  coffeesArray,
  CoffeesProps,
  CoffeesReducer,
} from '../reducer/Coffees/reducer'

interface CoffeesContextProviderProps {
  children: ReactNode
}

export interface cepProps {
  cep: number
}

interface CoffeesContextType {
  coffees: CoffeesProps[]
  coffeesInCart: CoffeesProps[]
  addrees: AddreesProps
  valorTotalCoffees: number
  checkCep: (cep: cepProps) => void
  changeUnityCoffee: (id: string, cond: boolean) => void
  changeUnityCoffeeInCart: (id: string, cond: boolean) => void
  handleAmountCoffeesInCart: (id: string) => void
  deleteCoffeeById: (id: string) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [stateCoffees, dispatch] = useReducer(CoffeesReducer, coffeesArray)

  const { coffees, coffeesInCart, valorTotalCoffees, addrees } = stateCoffees

  useEffect(() => {
    dispatch(changeValueCoffeesInCart())
  }, [coffeesInCart])

  function changeUnityCoffee(id: string, cond: boolean) {
    const cycleChange = { id, cond }
    dispatch(changeAmountCoffee(cycleChange))
  }
  function handleAmountCoffeesInCart(id: string) {
    dispatch(handleStatusInCart(id))
  }
  function changeUnityCoffeeInCart(id: string, cond: boolean) {
    const cycleChange = { id, cond }
    dispatch(changeAmountCoffeeInCart(cycleChange))
  }
  function deleteCoffeeById(id: string) {
    dispatch(deleteCoffeeInCart(id))
  }
  function checkCep(props: cepProps) {
    const api = axios.create({ baseURL: 'https://viacep.com.br' })
    api
      .get(`/ws/${props.cep}/json/`)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error))
  }

  return (
    <CoffeesContext.Provider
      value={{
        checkCep,
        addrees,
        deleteCoffeeById,
        valorTotalCoffees,
        changeUnityCoffeeInCart,
        coffeesInCart,
        handleAmountCoffeesInCart,
        coffees,
        changeUnityCoffee,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}

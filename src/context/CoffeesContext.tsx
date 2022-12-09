import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  changeAmountCoffee,
  changeAmountCoffeeInCart,
  changeValueCoffeesInCart,
  deleteCoffeeInCart,
  handleStatusInCart,
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
interface CoffeesContextType {
  coffees: CoffeesProps[]
  coffeesInCart: CoffeesProps[]
  addrees: AddreesProps
  valorTotalCoffees: number
  checkCep: () => void
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
  function checkCep() {
    fetch(`viacep.com.br/ws/68552140/json/`)
      .then((res) => res.json())
      .then((data) => console.log(data))
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

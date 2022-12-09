import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  changeAmountCoffee,
  changeAmountCoffeeInCart,
  changeValueCoffeesInCart,
  handleStatusInCart,
} from '../reducer/Coffees/actions'
import {
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
  // handleAddCoffeeCart: (id: string) => void
  changeUnityCoffee: (id: string, cond: boolean) => void
  changeUnityCoffeeInCart: (id: string, cond: boolean) => void
  handleAmountCoffeesInCart: (id: string) => void
}
export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [stateCoffees, dispatch] = useReducer(CoffeesReducer, coffeesArray)

  const { coffees, coffeesInCart } = stateCoffees

  useEffect(() => {
    dispatch(changeValueCoffeesInCart)
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

  // function handleAddCoffeeCart(id: string) {
  //   setCoffees(
  //     coffees.map((state) => {
  //       if (state.id === id) {
  //         return { ...state, inCart: true }
  //       } else {
  //         return state
  //       }
  //     }),
  //   )
  // }
  // function handleAddUnityCoffee(id: string, cond: boolean) {
  //   setCoffees(
  //     coffees.map((state) => {
  //       if (state.id === id) {
  //         const quantidade = state.qtd + (cond ? 1 : -1)
  //         if (quantidade < 1) {
  //           return state
  //         }
  //         return { ...state, qtd: quantidade }
  //       } else {
  //         return state
  //       }
  //     }),
  //   )
  // }

  return (
    <CoffeesContext.Provider
      value={{
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

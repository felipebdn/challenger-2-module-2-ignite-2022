import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { incrementCoffee } from '../reducer/Coffees/actions'
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
  // handleAddCoffeeCart: (id: string) => void
  changeUnityCoffee: (id: string, cond: boolean) => void
  totalCoffeesInCart: number
  total: number
}
export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [stateCoffees, dispatch] = useReducer(CoffeesReducer, coffeesArray)

  const { totalCoffeesInCart, coffees } = stateCoffees

  function changeUnityCoffee(id: string, cond: boolean) {
    const cycleChange = { id, cond }

    dispatch(incrementCoffee(cycleChange))
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
        total,
        coffees,
        totalCoffeesInCart,
        changeUnityCoffee,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}

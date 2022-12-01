import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { coffeesArray, CoffeesProps } from '../reducer/Coffees/reducer'

interface CoffeesContextProviderProps {
  children: ReactNode
}
interface CoffeesContextType {
  coffees: CoffeesProps[]
  setCoffees: (data: any) => void
  handleAddCoffeeCart: (id: string) => void
  handleAddUnityCoffee: (id: string, cond: boolean) => void
  totalCoffesCart: number
}
export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {

  const { state, dispatch } = useReducer(reducer, coffeesArray)
  const { coffess, totalCoffeesInCart } = state
  useEffect(() => {
    const total = coffees.filter((coffee) => coffee.inCart)
    console.log(total.length)
    setTotalCoffesCart(total.length)
  }, [coffees])

  function handleAddCoffeeCart(id: string) {
    setCoffees(
      coffees.map((state) => {
        if (state.id === id) {
          return { ...state, inCart: true }
        } else {
          return state
        }
      }),
    )
  }

  function handleAddUnityCoffee(id: string, cond: boolean) {
    setCoffees(
      coffees.map((state) => {
        if (state.id === id) {
          const quantidade = state.qtd + (cond ? 1 : -1)
          if (quantidade < 1) {
            return state
          }
          return { ...state, qtd: quantidade }
        } else {
          return state
        }
      }),
    )
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        totalCoffesCart,
        setCoffees,
        handleAddCoffeeCart,
        handleAddUnityCoffee,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}

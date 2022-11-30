import { createContext, ReactNode } from 'react'

interface CoffeesContextProviderProps {
  children: ReactNode
}

interface CoffeesContextType {}

const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  return (
    <CoffeesContext.Provider value={{}}>{children}</CoffeesContext.Provider>
  )
}

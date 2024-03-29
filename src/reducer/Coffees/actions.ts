import { AddreesProps } from './reducer'

export enum ActionTypes {
  CHANGE_NUMBER_COFFEE = 'CHANGE_NUMBER_COFFEE',
  ADD_COFFEE_IN_CART = 'CHANGE_STATUS_CONF_IN_CART',
  CHANGE_NUMBER_COFFEE_IN_CART = 'CHANGE_NUMBER_COFFEE_IN_CART',
  CHANGE_VALUE_COFFEES_IN_CART = 'CHANGE_VALUE_COFFEES_IN_CART',
  DELETE_COFFEE_IN_CART = 'DELETE_COFFEE_IN_CART',
  CHECK_CEP = 'CHECK_CEP',
}

interface coffeeChange {
  id: string
  cond: boolean
}
export function changeAmountCoffee({ id, cond }: coffeeChange) {
  return {
    type: ActionTypes.CHANGE_NUMBER_COFFEE,
    payload: { id, cond },
  }
}
export function handleStatusInCart(id: string) {
  return {
    type: ActionTypes.ADD_COFFEE_IN_CART,
    payload: { id },
  }
}
export function changeAmountCoffeeInCart({ id, cond }: coffeeChange) {
  return {
    type: ActionTypes.CHANGE_NUMBER_COFFEE_IN_CART,
    payload: { id, cond },
  }
}
export function changeValueCoffeesInCart() {
  return {
    type: ActionTypes.CHANGE_VALUE_COFFEES_IN_CART,
  }
}
export function deleteCoffeeInCart(id: string) {
  return {
    type: ActionTypes.DELETE_COFFEE_IN_CART,
    payload: { id },
  }
}
export function searchCep(data: AddreesProps) {
  return {
    type: ActionTypes.CHECK_CEP,
    payload: { data },
  }
}

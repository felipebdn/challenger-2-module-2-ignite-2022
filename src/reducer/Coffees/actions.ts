export enum ActionTypes {
  CHANGE_NUMBER_COFFEE = 'CHANGE_NUMBER_COFFEE',
  ADD_COFFEE_IN_CART = 'CHANGE_STATUS_CONF_IN_CART',
  CHANGE_NUMBER_COFFEE_IN_CART = 'CHANGE_NUMBER_COFFEE_IN_CART',
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

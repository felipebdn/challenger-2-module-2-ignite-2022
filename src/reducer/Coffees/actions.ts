export enum ActionTypes {
  CHANGE_NUMBER_COFFEE = 'CHANGE_NUMBER_COFFEE',
  INCREMENT_COFFEE = 'INCREMENT_COFFEE',
  INCREMENT_COFFEE_IN_CART = 'INCREMENT_COFFEE_IN_CART',
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
export function calculateAmountCoffeeInCart() {
  return {
    type: ActionTypes.INCREMENT_COFFEE_IN_CART,
  }
}

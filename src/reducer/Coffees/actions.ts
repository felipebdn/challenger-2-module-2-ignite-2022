export enum ActionTypes {
  DECREMENT_COFFEE = 'DECREMENT_COFFEE',
  INCREMENT_COFFEE = 'INCREMENT_COFFEE',
  INCREMENT_COFFEE_IN_CART = 'INCREMENT_COFFEE_IN_CART',
}

interface coffeeChange {
  id: string
  cond: boolean
}
export function incrementCoffee({ id, cond }: coffeeChange) {
  return {
    type: ActionTypes.INCREMENT_COFFEE,
    payload: { id, cond },
  }
}

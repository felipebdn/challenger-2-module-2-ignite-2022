export enum ActionTypes {
  DECREMENT_COFFEE = 'DECREMENT_COFFEE',
  INCREMENT_COFFEE = 'INCREMENT_COFFEE',
  INCREMENT_COFFEE_IN_CART = 'INCREMENT_COFFEE_IN_CART',
}
export function incrementCoffee() {
  return {
    type: ActionTypes.INCREMENT_COFFEE,
  }
}

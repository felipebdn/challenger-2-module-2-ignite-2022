import produce from 'immer'
import { v4 as uuidv4 } from 'uuid'
import { ActionTypes } from './actions'

export interface CoffeesProps {
  id: string
  img: string
  typeCoffee: string[]
  title: string
  subtitle: string
  valorUnidade: number
  qtd: number
  inCart?: boolean
}
interface CoffeesState {
  valorTotalCoffees: number
  coffeesInCart: CoffeesProps[]
  coffees: CoffeesProps[]
}
export const coffeesArray = {
  coffeesInCart: [],
  valorTotalCoffees: 0,
  coffees: [
    {
      id: uuidv4(),
      img: 'expressoTradicional',
      typeCoffee: ['tradicional'],
      title: 'Expresso Tradicional',
      subtitle: 'O tradicional café feito com água quente e grãos moídos',
      valorUnidade: 9.9,
      qtd: 1,
      inCart: false,
    },
    {
      id: uuidv4(),
      img: 'expressoAmericano',
      typeCoffee: ['tradicional'],
      title: 'Expresso Americano',
      subtitle: 'Expresso diluído, menos intenso que o tradicional',
      valorUnidade: 9.9,
      qtd: 1,
      inCart: false,
    },
    {
      id: uuidv4(),
      img: 'expressoCremoso',
      typeCoffee: ['tradicional'],
      title: 'Expresso Cremoso',
      subtitle: 'Café expresso tradicional com espuma cremosa',
      valorUnidade: 9.9,
      qtd: 1,
      inCart: false,
    },
    {
      id: uuidv4(),
      img: 'expressoGelado',
      typeCoffee: ['tradicional', 'gelado'],
      title: 'Expresso Gelado',
      subtitle: 'Bebida preparada com café expresso e cubos de gelo',
      valorUnidade: 9.9,
      qtd: 1,
      inCart: false,
    },
    {
      id: uuidv4(),
      img: 'cafeComLeite',
      typeCoffee: ['tradicional', 'com leite'],
      title: 'Café com Leite',
      subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
      valorUnidade: 9.9,
      qtd: 1,
      inCart: false,
    },
    {
      id: uuidv4(),
      img: 'latte',
      typeCoffee: ['tradicional', 'com leite'],
      title: 'Latte',
      subtitle:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      valorUnidade: 9.9,
      qtd: 1,
      inCart: false,
    },
    {
      id: uuidv4(),
      img: 'capuccino',
      typeCoffee: ['tradicional', 'com leite'],
      title: 'Capuccino',
      subtitle:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      valorUnidade: 9.9,
      qtd: 1,
      inCart: false,
    },
    {
      id: uuidv4(),
      img: 'macchiato',
      typeCoffee: ['tradicional', 'com leite'],
      title: 'Macchiato',
      subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
      valorUnidade: 9.9,
      qtd: 1,
      inCart: false,
    },
    {
      id: uuidv4(),
      img: 'mocaccino',
      typeCoffee: ['tradicional', 'com leite'],
      title: 'Mocaccino',
      subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
      valorUnidade: 9.9,
      qtd: 1,
      inCart: false,
    },
    {
      id: uuidv4(),
      img: 'chocolateQuente',
      typeCoffee: ['especial', 'com leite'],
      title: 'Chocolate Quente',
      subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
      valorUnidade: 9.9,
      qtd: 1,
      inCart: false,
    },
    {
      id: uuidv4(),
      img: 'cubano',
      typeCoffee: ['especial', 'alcoólico', 'com leite'],
      title: 'Cubano',
      subtitle:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      valorUnidade: 9.9,
      qtd: 1,
      inCart: false,
    },
    {
      id: uuidv4(),
      img: 'havaiano',
      typeCoffee: ['especial'],
      title: 'Havaiano',
      subtitle: 'Bebida adocicada preparada com café e leite de coco',
      valorUnidade: 9.9,
      qtd: 1,
      inCart: false,
    },
    {
      id: uuidv4(),
      img: 'arabe',
      typeCoffee: ['especial'],
      title: 'Árabe',
      subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
      valorUnidade: 9.9,
      qtd: 1,
      inCart: false,
    },
    {
      id: uuidv4(),
      img: 'irlandes',
      typeCoffee: ['especial', 'alcoólico'],
      title: 'Irlandês',
      subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      valorUnidade: 9.9,
      qtd: 1,
      inCart: false,
    },
  ],
}

export function CoffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.CHANGE_NUMBER_COFFEE: {
      return produce(state, (draft) => {
        const currentCoffeeIndexI = state.coffees.findIndex((coffee) => {
          return coffee.id === action.payload.id
        })
        if (
          action.payload.cond === false &&
          state.coffees[currentCoffeeIndexI].qtd <= 1
        ) {
          return state
        }
        draft.coffees[currentCoffeeIndexI].qtd += action.payload.cond ? +1 : -1
      })
    }
    case ActionTypes.ADD_COFFEE_IN_CART: {
      return produce(state, (draft) => {
        const currentCoffeeIndexI = draft.coffees.findIndex((coffee) => {
          return coffee.id === action.payload.id
        })
        const prepareData = draft.coffees.filter((coffee) => {
          return coffee.id === action.payload.id
        })
        const data = {
          id: prepareData[0].id,
          img: prepareData[0].img,
          qtd: prepareData[0].qtd,
          subtitle: prepareData[0].subtitle,
          title: prepareData[0].title,
          typeCoffee: prepareData[0].typeCoffee,
          valorUnidade: prepareData[0].valorUnidade,
        }
        draft.coffeesInCart.push(data)
        draft.coffees[currentCoffeeIndexI].inCart = true
        draft.coffees[currentCoffeeIndexI].qtd = 1
      })
    }
    case ActionTypes.CHANGE_NUMBER_COFFEE_IN_CART: {
      return produce(state, (draft) => {
        const currentCoffeeIndexI = state.coffeesInCart.findIndex((coffee) => {
          return coffee.id === action.payload.id
        })
        if (
          action.payload.cond === false &&
          state.coffeesInCart[currentCoffeeIndexI].qtd <= 1
        ) {
          return state
        }
        draft.coffeesInCart[currentCoffeeIndexI].qtd += action.payload.cond
          ? +1
          : -1
      })
    }
    case ActionTypes.CHANGE_VALUE_COFFEES_IN_CART: {
      return produce(state, (draft) => {
        const valor = draft.coffeesInCart.reduce((item, i) => {
          return item.valueOf + i.valorUnidade
        }, draft.valorTotalCoffees)
        console.log(valor)
      })
    }
    default:
      return state
  }
}

// react imps
import {createContext, useContext, useReducer } from "react"

// random products generator
import faker from 'faker'

// react reducer
import {CartReducer,filterReducer} from './Reducers.jsx'

const shoppingCart = createContext()

faker.seed(89)
const Context = ({children}) => {
  
  const products = [...Array(20)].map(()=>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }))

  

  const [state,dispatch] = useReducer(CartReducer,{
    products:products,
    cart: [], 
  })

  const [filterSTATE,filterDispatcher] = useReducer(filterReducer,{
    byRating:0,
    fastDeleviry:false,
    byStock:false,
    searchQuery:"",
  })

  return (
    <shoppingCart.Provider value={{state,dispatch,filterSTATE,filterDispatcher}}>
      {children}
    </shoppingCart.Provider>
  )
}


export const cartState = ()=>{
  return useContext(shoppingCart)
}

export default Context
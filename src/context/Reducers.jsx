export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload.id
            ? (item.qty = action.payload.qty)
            : item.qty
        ),
      };
    // case "INITIALIZE_CART":
    //   return {
    //     ...state,
    //     cart: action.payload,
    //   };
    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "GET_RATING":
      return {
        ...state,
        byRating: action.payload,

      };
    case "GET_SPECIFIC_PRICE":
      return {
        ...state,
        sort: action.payload,
      };
    case "CHECK_BY_STOCK":
      return {
        ...state,
        byStock: !state.byStock,
      };
    case "FAST_DELEVIRY":
      return {
        ...state,
        fastDeleviry: !state.fastDeleviry,
      };
    case "CLEAR_FILTER":
      return {
        byRating: 0,
        fastDeleviry: false,
        byStock: false,
        searchQuery: "",
      };
    default:
      return state;
  }
};

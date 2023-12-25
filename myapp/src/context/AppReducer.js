export const getBasketTotal = (basket) => {
  return basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);
};

export const initState = {
  basket: [],
  user: null,
};

const AppReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_TO_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't find the id ${action.id}as it is not in basket!`);
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default AppReducer;

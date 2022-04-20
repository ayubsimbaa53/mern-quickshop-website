import { combineReducers } from "redux";

import { cartReducer } from "./cartReducer";
import { categoryReducer } from "./categoryReducer";
import {
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
} from "./orderReducer";
import {
  productByIdReducer,
  productReducer,
  shopReducer,
} from "./productReducer";
import {
  userLoginReducer,
  userLogoutReducer,
  userRegisterReducer,
} from "./userReducer";

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userLogout: userLogoutReducer,
  allProducts: productReducer,
  productById: productByIdReducer,
  cart: cartReducer,
  shopProduct: shopReducer,
  allCategories: categoryReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
});

import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { productsApiSlice } from "./api/products.api"
import { searchSlice } from "./slices/search.slice"
import { cartSlice } from "./slices/cart.slice"

const rootReducer = combineSlices(cartSlice, searchSlice, productsApiSlice)
export type RootState = ReturnType<typeof rootReducer>

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling from `rtk-query`.
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(productsApiSlice.middleware)
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>

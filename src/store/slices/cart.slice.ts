import { createAppSlice } from "@/store/createAppSlice"
import type { Product } from "@/types"
import { getProductPricing } from "@/utils/product"

interface CartProduct extends Product {
  quantity: number
}

interface Cart {
  id: number | null
  products: CartProduct[]
  userId: number | null
}

const initialState: Cart = {
  id: null,
  products: [],
  userId: null,
}

export const cartSlice = createAppSlice({
  name: "cart",
  initialState,
  reducers: (create) => ({
    addProduct: create.reducer((state, action: { payload: CartProduct }) => {
      const newProduct = action.payload
      const productInCart = state.products.find(
        (product) => product.id === newProduct.id
      )

      if (productInCart) {
        productInCart.quantity += 1
      } else {
        state.products.push(newProduct)
      }
    }),

    removeProduct: create.reducer((state, action: { payload: number }) => {
      const id = action.payload
      const index = state.products.findIndex((product) => product.id === id)

      if (index !== -1) {
        state.products.splice(index, 1)
      }
    }),

    updateQuantity: create.reducer(
      (state, action: { payload: { id: number; quantity: number } }) => {
        const { id, quantity } = action.payload
        const product = state.products.find((product) => product.id === id)

        if (product) {
          product.quantity = quantity
        }
      }
    ),
  }),

  selectors: {
    selectDiscountedTotal: (state) =>
      state.products.reduce((acc, curr) => {
        const { discountedValue } = getProductPricing(curr)
        return acc + discountedValue * curr.quantity
      }, 0),
    selectProducts: (state) => state.products,
    selectTotal: (state) =>
      state.products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    selectTotalQuantity: (state) =>
      state.products.reduce((acc, curr) => acc + curr.quantity, 0),
  },
})

export const { addProduct, removeProduct, updateQuantity } = cartSlice.actions
export const {
  selectDiscountedTotal,
  selectProducts,
  selectTotal,
  selectTotalQuantity,
} = cartSlice.selectors

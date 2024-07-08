import { createAppSlice } from "@/store/createAppSlice"

interface Search {
  query: string
  category: string
}

const initialState: Search = {
  query: "",
  category: "",
}

export const searchSlice = createAppSlice({
  name: "search",
  initialState,
  reducers: (create) => ({
    setCategory: create.reducer(
      (state, action: { payload: { category: string } }) => {
        const { category } = action.payload
        state.category = category
      }
    ),

    setQuery: create.reducer(
      (state, action: { payload: { query: string } }) => {
        const { query } = action.payload
        state.query = query
      }
    ),
  }),

  selectors: {
    selectCategory: (state) => state.category,
    selectQuery: (state) => state.query,
  },
})

export const { setCategory, setQuery } = searchSlice.actions
export const { selectCategory, selectQuery } = searchSlice.selectors

"use client"

import { setupListeners } from "@reduxjs/toolkit/query"
import type { ReactNode } from "react"
import { useEffect, useRef } from "react"
import { Provider } from "react-redux"
import type { AppStore } from "@/store/store"
import { makeStore } from "@/store/store"

interface Props {
  readonly children: ReactNode
}

export const StoreProvider = ({ children }: Props) => {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    // Create the store instance the first time it renders
    storeRef.current = makeStore()
  }

  useEffect(() => {
    if (storeRef.current != null) {
      const unsubscribe = setupListeners(storeRef.current.dispatch)
      return unsubscribe
    }
  }, [])

  return <Provider store={storeRef.current}>{children}</Provider>
}

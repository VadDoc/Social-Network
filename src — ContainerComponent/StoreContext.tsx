import React from "react";
import {StoreType} from "./Redux/redux-store";

export const StoreContext = React.createContext({} as StoreType)

export type ProviderType = {
  store: StoreType
  children: React.ReactNode
}

export const Provider = ({store, children}: ProviderType) => {
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
}

// export const Consumer = ({store, children}: ProviderType) => {
//   return (
//     <StoreContext.Provider value={store}>
//       {children}
//     </StoreContext.Provider>
//   )
// }

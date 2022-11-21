import { configureStore } from '@reduxjs/toolkit'
import pharm from './features/pharm';

const reducer = {
  pharm
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;

import { configureStore } from '@reduxjs/toolkit'
import cartdetails from "../lib/CartSlice"

export default configureStore({
  reducer: {cartdetails}
})
import { configureStore } from '@reduxjs/toolkit'
import favourite from './slices/favourite'
const store = configureStore({
    reducer: {
        favourite: favourite
    }
})

export default store
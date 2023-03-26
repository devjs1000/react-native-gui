import {configureStore} from '@reduxjs/toolkit'

import processReducer from './process.slice'
import appReducer from './app.slice'

export const store = configureStore({
    reducer: {
        process: processReducer,
        app: appReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


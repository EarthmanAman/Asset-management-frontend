import { configureStore } from '@reduxjs/toolkit'

import postsReducer from './splices/test'

export default configureStore({
  reducer: {
    posts: postsReducer
  }
})
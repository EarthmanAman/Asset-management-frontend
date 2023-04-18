import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api_stub_post } from '../../api/_stub'

const initialState = {
  category_id: 1
}


const addCategoryIdSplice = createSlice({
  name: 'addCategoryId',
  initialState,
  reducers: {
    updateId(state, category_id){
      state.category_id = category_id
    }
  },

  
})
export const {updateId} = addCategoryIdSplice.actions

export default addCategoryIdSplice.reducer
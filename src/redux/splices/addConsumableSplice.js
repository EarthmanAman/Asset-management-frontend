import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api_stub_post } from '../../api/_stub'

const initialState = {
  status: {status:0},
  isLoading: false,
  error: null,
}

export const addConsumable = createAsyncThunk(
  'add/consumable',
  async (context) => {
    const res = await api_stub_post("/consumable/create/", context)
    return res
  }
)

const addConsumableSplice = createSlice({
  name: 'addConsumable',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(addConsumable.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(addConsumable.fulfilled, (state, action) => {
      state.isLoading = false
      state.status = action.payload
    })
    builder.addCase(addConsumable.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
  
})

export default addConsumableSplice.reducer
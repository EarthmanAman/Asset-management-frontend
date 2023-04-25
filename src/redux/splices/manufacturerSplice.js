import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api_stub_get } from '../../api/_stub'

const initialState = {
  manufacturer: {
    name: null,
    assets: []
  }
}

export const manufacturerDetail = createAsyncThunk(
    'add/manufacturerDetail',
    async (id) => {
      const res = await api_stub_get(`/category/man/${id}/`)
      return res
    }
  )

const manufacturerSplice = createSlice({
  name: 'manufacturer',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(manufacturerDetail.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(manufacturerDetail.fulfilled, (state, action) => {
      state.isLoading = false
      state.manufacturer = action.payload
    })
    builder.addCase(manufacturerDetail.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },

  
})
// export const {updateVendorId} = addVendorIdSplice.actions

export default manufacturerSplice.reducer
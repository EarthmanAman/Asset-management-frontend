import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api_stub_post, api_stub_get } from '../../api/_stub'

const initialState = {
  vendor: {}
}

export const addVendor = createAsyncThunk(
    'add/vendorDetail',
    async (id) => {
      const res = await api_stub_get(`/vendor/${id}/`)
      return res
    }
  )

const addVendorSplice = createSlice({
  name: 'addVendor',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(addVendor.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(addVendor.fulfilled, (state, action) => {
      state.isLoading = false
      state.vendor = action.payload
    })
    builder.addCase(addVendor.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },

  
})
// export const {updateVendorId} = addVendorIdSplice.actions

export default addVendorSplice.reducer
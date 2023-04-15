import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api_stub_post } from '../../api/_stub'

const initialState = {
  status: {status:0},
  isLoading: false,
  error: null,
}

export const addEquipment = createAsyncThunk(
  'add/equipment',
  async (context) => {
    const res = await api_stub_post("/equipment/create/", context)
    return res
  }
)

const addEquipmentSplice = createSlice({
  name: 'addEquipment',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(addEquipment.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(addEquipment.fulfilled, (state, action) => {
      state.isLoading = false
      state.status = action.payload
    })
    builder.addCase(addEquipment.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
  
})

export default addEquipmentSplice.reducer
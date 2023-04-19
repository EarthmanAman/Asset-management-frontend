import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api_stub_post } from '../../api/_stub'

const initialState = {
  vendor_id: 1
}


const addVendorIdSplice = createSlice({
  name: 'addVendorId',
  initialState,
  reducers: {
    updateVendorId(state, vendor_id){
      state.vendor_id = vendor_id
    }
  },

  
})
export const {updateVendorId} = addVendorIdSplice.actions

export default addVendorIdSplice.reducer
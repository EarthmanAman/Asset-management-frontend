import { configureStore } from '@reduxjs/toolkit'

import totalsSlice from './splices/test'
import addEquipmentSplice from './splices/addEquipmentSplice'

export default configureStore({
  reducer: {
    totals: totalsSlice,
    addEquipment: addEquipmentSplice,
  }
})
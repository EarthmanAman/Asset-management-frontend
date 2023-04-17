import { configureStore } from '@reduxjs/toolkit'

import totalsSlice from './splices/test'
import addEquipmentSplice from './splices/addEquipmentSplice'
import addConsumableSplice from './splices/addConsumableSplice'

export default configureStore({
  reducer: {
    totals: totalsSlice,
    addEquipment: addEquipmentSplice,
    addConsumable:addConsumableSplice,
  }
})
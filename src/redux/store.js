import { configureStore } from '@reduxjs/toolkit'

import totalsSlice from './splices/test'
import addEquipmentSplice from './splices/addEquipmentSplice'
import addConsumableSplice from './splices/addConsumableSplice'
import addCategoryIdSplice from './splices/addCategoryIdSplice'
import addVendorIdSplice from './splices/addVendorIdSplice'

export default configureStore({
  reducer: {
    totals: totalsSlice,
    addEquipment: addEquipmentSplice,
    addConsumable:addConsumableSplice,
    addCategoryId:addCategoryIdSplice,
    addVendorId:addVendorIdSplice,
  }
})
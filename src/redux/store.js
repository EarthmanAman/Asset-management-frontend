import { configureStore } from '@reduxjs/toolkit'

import totalsSlice from './splices/test'
import addEquipmentSplice from './splices/addEquipmentSplice'
import addConsumableSplice from './splices/addConsumableSplice'
import addCategoryIdSplice from './splices/addCategoryIdSplice'
import addVendorSplice from './splices/addVendorIdSplice'
import manufacturerSplice from './splices/manufacturerSplice'

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
}

const totalsSliceR = persistReducer(persistConfig, totalsSlice)
const addEquipmentSpliceR = persistReducer(persistConfig, addEquipmentSplice)
const addConsumableSpliceR = persistReducer(persistConfig, addConsumableSplice)
const addCategoryIdSpliceR = persistReducer(persistConfig, addCategoryIdSplice)
const addVendorSpliceR = persistReducer(persistConfig, addVendorSplice)
const manufacturerSpliceR = persistReducer(persistConfig, manufacturerSplice)

export const store = configureStore( {
  reducer: {
    totals: totalsSliceR,
    addEquipment: addEquipmentSpliceR,
    addConsumable:addConsumableSpliceR,
    addCategoryId:addCategoryIdSpliceR,
    addVendor:addVendorSpliceR,
    manufacturer: manufacturerSpliceR,
  },
  middleware: [thunk]

})

export const persistor = persistStore(store)

import {configureStore} from '@reduxjs/toolkit'

import fournisseurSlice from './fournisseurSlice'
import produitSlice from './produitSlice'
import userSlice from './userSlice'
export const store = configureStore({
    reducer:{
       
        fournisseur:fournisseurSlice,
        produit:produitSlice,
        users:userSlice
    },
})
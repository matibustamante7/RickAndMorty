import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getItem } from '../../utils/localStorage';

// Define a type for the slice state
interface AddCartState {
    id: string | number;
    name: string;
    image: string;
    info: string;
}

interface RemoveCartState {
  id: string | number;
}

// Define the initial state using that type
const initialState: AddCartState[] = getItem('cart') || []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddCartState>) => {
      const {id} = action.payload;

      if (state.length === 0 || 
          state.filter((item)=> item.id === id).length === 0) {
          state.push(action.payload);
      }
    },
    removeToCart: (state, action: PayloadAction<RemoveCartState>) => {
      //voy a filrar todos los item y crear un nuevo estado en el cual me va a mostrar todos los item que sean diferentes al id que viene por payload
      const {id} = action.payload;
      if (state.some((item)=> item.id === id)) {
        return state = state.filter((item)=>item.id !== id)
      }
    }
  },
})

export const { addToCart, removeToCart } = cartSlice.actions

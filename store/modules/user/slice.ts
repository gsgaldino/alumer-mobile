import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../../types'
import { SaveUserPayloadAction } from './saga'

const INITIAL_STATE: { user: IUser } = {
  user: {
    firstname: '',
    alumecas: {
      balance: 0,
      lastUpdateAt: 0
    },
    avatarUrl: '',
    email: '',
    lastname: '',
    nick: '',
    artifacts: [],
    badges: [],
    eventsCounter: {
      incredible: 0,
      pingucos: 0
    },
    role: '',
    since: 0,
    team: ''
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    saveUser: (state, action: PayloadAction<SaveUserPayloadAction>) => {},
  }
})

export const { saveUser } = userSlice.actions

export default userSlice.reducer

import type { PayloadAction } from '@reduxjs/toolkit'
import { call, takeLatest, all } from 'redux-saga/effects'
import { HttpClientAxiosAdapter } from '../../../infra/adapters'
import { IRegisterPayload } from '../../../app/(auth)/register'

import * as actions from './slice'

const api = new HttpClientAxiosAdapter()

export type SaveUserPayloadAction = {
  payload: IRegisterPayload,
  callback: (data: unknown) => void
}

export function* saveUser({ payload }: PayloadAction<SaveUserPayloadAction>) {
  try {
    const response = yield call(api.post, 'http://localhost:3333/user', { ...payload.payload })
    if (response && payload.callback) payload.callback(response)
  } catch (error) {
    console.log('error.response.data', error.response.data)
    if (error.response.data && payload.callback) payload.callback(error.response.data)
  }
}

export default all([
  takeLatest(actions.saveUser.type as any, saveUser)
])

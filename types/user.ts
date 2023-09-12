import { IBadge } from './badge'
import { IArtifact } from './artifact'

export interface IUser {
  firstname: string
  lastname: string
  nick: string
  email: string
  avatarUrl: string
  team?: string
  since?: number
  role?: string
  eventsCounter?: {
    pingucos: number
    incredible: number
  }
  alumecas: {
    balance: number,
    lastUpdateAt: number
  }
  badges?: IBadge[]
  artifacts?: IArtifact[]
}

import { type User } from 'better-auth'
import { LucideIcon } from 'lucide-react'

export interface NavPrimaryProps {
  items: {
    title: string
    to: string
    icon: LucideIcon
    activeOptions: { exact: boolean }
  }[]
}

export interface NavUserProps {
  user: User
}

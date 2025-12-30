// src/start.ts
import { createMiddleware, createStart } from '@tanstack/react-start'
import { authMiddleware } from './middlewares/auth'

const loggingMiddleware = createMiddleware({ type: 'request' }).server(
  ({ request, next }) => {
    const url = new URL(request.url)

    console.log(`[${request.method}] ${url.pathname}`)

    return next()
  },
)

export const startInstance = createStart(() => {
  return {
    requestMiddleware: [loggingMiddleware, authMiddleware],
  }
})

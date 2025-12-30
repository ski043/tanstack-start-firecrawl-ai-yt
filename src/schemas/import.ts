import z from 'zod'

export const importSchema = z.object({
  url: z.string().url(),
})

export const bulkImportSchema = z.object({
  url: z.string().url(),
  search: z.string(),
})

export const extractSchema = z.object({
  author: z.string().nullable(),
  publishedAt: z.string().nullable(),
})

export const searchSchema = z.object({
  query: z.string().min(1),
})

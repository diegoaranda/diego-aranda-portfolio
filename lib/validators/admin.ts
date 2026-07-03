import { z } from 'zod'

export const adminLoginSchema = z.object({
  email: z.string().trim().toLowerCase().email('Ingresa un email válido.'),
})

export type AdminLoginInput = z.infer<typeof adminLoginSchema>

import { z } from 'zod';

export const editTechSchema = z.object({
    status: z.enum(['Iniciante', 'Intermediário', 'Avançado'], { message: 'Selecione um Status' })
})
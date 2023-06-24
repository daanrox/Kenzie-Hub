import { z } from 'zod';

export const addTechSchema = z.object({
    title: z.string().nonempty('Escreva o nome da Tecnologia'),
    status: z.enum(['Iniciante', 'Intermediário', 'Avançado'], { message: 'Selecione um Status' })
})
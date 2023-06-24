import { z } from 'zod';

export const loginUserSchema = z.object({
    email: z.string().nonempty('O email é obrigatório!').email('Digite um email válido!'),
    password: z.string().nonempty('Digite sua senha!').min(4, 'Sua senha precisa conter no mínimo 4 caracteres.'),
})
    
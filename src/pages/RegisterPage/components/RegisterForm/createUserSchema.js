import { z } from 'zod';

export const createUserSchema = z.object({
    name: z.string().nonempty('O nome é obrigatório!').min(2, 'O nome precisa conter no mínimo 2 caracteres'),
    email: z.string().nonempty('O email é obrigatório!').email('Digite um email válido!'),
    bio: z.string().nonempty('A bio é obrigatória').min(10, 'A bio precisa conter no mínimo 10 caracteres'),
    password: z.string()
    .min(8, { message: 'A senha é obrigatória e precisa de mínimo 8 caracteres'})
    .regex(/(?=.*?[A-Z])/, 'É necessário ao menos uma letra maiúscula')
    .regex(/(?=.*?[a-z])/, 'É necessário ao menos uma letra minúscula')
    .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número')
    .regex(/(?=.*?[!@#$%^&*()_+={}\[\]|\\;:'',<.>\/?])/, 'É necessário pelo menos um caractere especial'),
    confirm: z.string().nonempty('A confirmação de senha é obrigatória!'),
    contact: z.string().nonempty('Digite uma opção de contato!'),
    course_module: z.enum(['Primeiro módulo (Introdução ao Frontend)', 'Segundo módulo (Frontend Avançado)', 'Terceiro módulo (Introdução ao Backend)', 'Quarto módulo (Backend Avançado)'], { message: 'Por favor, selecione um módulo válido' })
}).refine(({ password, confirm }) => password === confirm, {
    message: 'As senhas precisam corresponder',
    path: ['confirm'],
})
    
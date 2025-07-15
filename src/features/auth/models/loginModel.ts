import {z} from 'zod';

export const schema = z.object({
    email: z.string().nonempty({message: "El correo electrónico es requerido"}).email({message: "Correo electrónico inválido"}),
    password: z.string().nonempty({message: "La contraseña es requerida"}).min(8, {message: "La contraseña debe tener al menos 8 caracteres"}),
})

export type LoginValues = z.infer<typeof schema>;
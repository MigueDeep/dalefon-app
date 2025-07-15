import {z} from 'zod';

export const userSchema = z.object({
    fullname: z.string().nonempty({message: "El nombre completo es requerido"}),
    username: z.string().nonempty({message: "El nombre de usuario es requerido"}),
    email: z.string().nonempty({message: "El correo electrónico es requerido"}).email({message: "Correo electrónico inválido"}),
})

export type UserValues = z.infer<typeof userSchema>;

export interface User {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

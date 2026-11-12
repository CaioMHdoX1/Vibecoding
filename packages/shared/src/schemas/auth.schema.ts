import { z } from "zod";
import { ROLES } from "../constants/roles.js";

export const loginSchema = z.object({
	email: z.string().email("E-mail em formato inválido"),
	password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres"),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
	name: z.string().min(2, "O nome deve conter ao menos 2 caracteres"),
	email: z.string().email("E-mail em formato inválido"),
	password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres"),
	role: z
		.enum([ROLES.CUSTOMER, ROLES.MANAGER, ROLES.ADMIN])
		.default(ROLES.CUSTOMER),
});

export type RegisterInput = z.infer<typeof registerSchema>;

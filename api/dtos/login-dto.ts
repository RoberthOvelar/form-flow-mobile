import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string({ message: "Digite um email" })
    .email("Digite um email válido"),
  password: z.string({ message: "Digite uma senha" }),
});

export type LoginDto = z.infer<typeof LoginSchema>;

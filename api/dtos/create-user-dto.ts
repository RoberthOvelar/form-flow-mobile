import { z } from "zod";

export const CreateUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string().min(8).max(24),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;

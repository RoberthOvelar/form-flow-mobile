import { z } from "zod";

export const ReturnUserSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
});

export type ReturnUserDto = z.infer<typeof ReturnUserSchema>;

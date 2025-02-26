import { z } from "zod";
import { ReturnUserSchema } from "./return-user-dto";

export const ReturnLoginSchema = z.object({
  accessToken: z.string(),
  user: ReturnUserSchema,
});

export type ReturnLoginDto = z.infer<typeof ReturnLoginSchema>;

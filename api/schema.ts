import { z } from 'zod';

export const insertContactRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().optional().nullable(),
});
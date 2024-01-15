import { z } from "zod";

export const createRestaurantSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
});

export type CreateRestaurantDto = z.infer<typeof createRestaurantSchema>;

import { desc } from "drizzle-orm";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { restaurants } from "~/server/db/schema/restaurants";

export const restaurantsRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(restaurants).values({
        name: input.name,
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db
      .select()
      .from(restaurants)
      .orderBy(desc(restaurants.createdAt));
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

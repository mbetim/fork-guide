import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const restaurants = pgTable("restaurants", {
  id: serial("id").notNull().primaryKey(),
  name: varchar("name").notNull(),
  description: varchar("description"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

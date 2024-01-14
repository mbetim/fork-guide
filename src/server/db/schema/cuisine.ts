import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const cusine = pgTable("cuisines", {
  id: serial("id").notNull().primaryKey(),
  name: varchar("name").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

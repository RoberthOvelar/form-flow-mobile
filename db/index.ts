import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import schema from "@/db/schema";

import Product from "@/model/Product";

const adapter = new SQLiteAdapter({
  schema,
  jsi: true /* Platform.OS === 'ios' */,
  onSetUpError: (error) => {},
});
const database = new Database({
  adapter,
  modelClasses: [Product],
});

export default database;

export const productsCollection = database.get<Product>("products");

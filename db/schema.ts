import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
  version: 6,
  tables: [
    tableSchema({
      name: "products",
      columns: [
        { name: "name", type: "string" },
        { name: "price", type: "number" },
      ],
    }),
  ],
});

import { defineDb, defineTable, column } from "astro:db";

const BussinesInfo = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    bussines_name: column.text(),
    business_owner_name: column.text(),
    business_owner_phone: column.text(),
  },
});

export default defineDb({
  tables: { BussinesInfo },
});

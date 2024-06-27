"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBook = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.TableBook = (0, pg_core_1.pgTable)('TableBook', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('title').notNull(),
    author: (0, pg_core_1.varchar)('author').notNull(),
    year: (0, pg_core_1.varchar)('year').notNull()
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const migrator_1 = require("drizzle-orm/neon-http/migrator");
const db_1 = require("./db");
async function migration() {
    try {
        console.log('__________Migration started__________');
        await (0, migrator_1.migrate)(db_1.db, {
            migrationsFolder: __dirname + '/migrations',
        });
        console.log("_________Migration completed_________");
        process.exit(0);
    }
    catch (error) {
        console.log("Migration unsuccessful", error);
    }
}
migration().catch((e) => {
    console.error("Unexpected error", e);
});

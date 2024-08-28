import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

// Ensure the path is correctly set to load the environment variables
config({ path: ".env.local" });

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema.ts",
    dbCredentials: {
        url: process.env.DRIZZLE_DATABASE_URL!, // Ensure this matches the environment variable
    },
    verbose: true,
    strict: true,
});

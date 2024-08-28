import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthConfig } from "next-auth";
import github from "next-auth/providers/github";
import { db } from "./db/db";

export default {
    adapter: DrizzleAdapter(db),
    providers: [github],
    session: {
        strategy: "jwt"
    }
} satisfies NextAuthConfig
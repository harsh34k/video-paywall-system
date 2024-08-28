import { db } from "@/db/db";
import { users } from "@/db/schema";
import { verifyAuth } from "@hono/auth-js";
import { error } from "console";
import { eq } from "drizzle-orm";
import { Hono } from "hono";

const app = new Hono()
    .get('/is-premium',
        verifyAuth(),
        async (c) => {
            const session = c.get("authUser");
            if (!session.token?.email) {

                return c.json({ error: "unauthorized" }, 401);

            }
            const [user] = await db.select().from(users).where(eq(users.email, session.token.email));
            if (!user) {

                return c.json({ error: "user not found" }, 404);

            }
            if (!user.ispremium) {
                return c.json({ ispremium: false })
            }
            else {
                return c.json({ ispremium: true })
            }
        }
    )

export default app;
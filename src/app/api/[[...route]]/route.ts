import { Context, Hono } from 'hono'
import { handle } from 'hono/vercel'
import { AuthConfig, initAuthConfig } from "@hono/auth-js"
import authConfig from '@/auth.config'
import userRoutes from "@/app/api/[[...route]]/user"
import paymentsRoute from "@/app/api/[[...route]]/payments"

export const runtime = 'nodejs'
function getAuthConfig(c: Context): AuthConfig {
    return {
        secret: c.env.AUTH_SECRET,
        ...authConfig
    }
}

const app = new Hono().basePath('/api')
app.use("*", initAuthConfig(getAuthConfig))

app.get('/hello', (c) => {
    return c.json({
        message: 'Hello Next.js!',
    })
})
const routes = app.route("/user", userRoutes).route("/payments", paymentsRoute)

export const GET = handle(app)
export const POST = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)
export type AppType = typeof routes
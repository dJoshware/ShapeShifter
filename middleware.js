import { updateSession } from "./lib/middleware";

export async function middleware(req) {
    // Update user's auth session
    return await updateSession(req);
}

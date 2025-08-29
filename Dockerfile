# Stage 1: build
FROM node:22-alpine AS builder
WORKDIR /app

# Native deps some Next projects need (e.g., sharp)
RUN apk add --no-cache libc6-compat

ENV NEXT_TELEMETRY_DISABLED=1
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: runtime
FROM node:22-alpine AS runner
WORKDIR /app
RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Next binds to 0.0.0.0 inside containers
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Copy only what we need to run `next start` (smaller than copying all of /app)
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]

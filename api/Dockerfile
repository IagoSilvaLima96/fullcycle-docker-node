FROM node:18-bullseye-slim

RUN mkdir -p /app && \
  chown -R node:node /app

WORKDIR /app

USER node

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

EXPOSE 8080

ENTRYPOINT ["/bin/sh", "-c", "npm run dev"]

FROM node:18-bullseye-slim


RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm ci --only=production

COPY --chown=node:node . .

RUN chmod +x start.sh

EXPOSE 8080

ENTRYPOINT ["./start.sh"]

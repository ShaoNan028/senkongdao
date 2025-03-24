# 前端构建阶段
FROM node:16-alpine as frontend-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 后端构建阶段
FROM node:16-alpine
WORKDIR /app
COPY server/package*.json ./
RUN npm install --production
COPY server ./
COPY --from=frontend-build /app/build ./public

# 环境变量
ENV PORT=5000
ENV NODE_ENV=production

EXPOSE 5000
CMD ["node", "server.js"]
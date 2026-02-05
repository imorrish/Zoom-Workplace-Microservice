npm init -y
npm i express axios ws helmet cors express-rate-limit zod winston prom-client dotenv
npm i -D typescript ts-node nodemon jest ts-jest @types/node @types/express supertest @types/supertest eslint prettier
npx tsc --init

cp .env.example .env
npm run dev     # nodemon with ts-node
# or
npm run build && npm start
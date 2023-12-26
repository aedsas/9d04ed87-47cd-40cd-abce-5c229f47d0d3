# CHG App - Technical Exercise
This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## 1. Tech Stack Used
If you are not familiar with the different technologies used in this project, 
please refer to the respective docs.

**Note:** The selected tech includes some technologies that may be redundant
in a production environment (e.g., Boostrap/Tailwind or Redux/Context). 
This is by design, as the main goal of this app is to showcase capabilities.

### 1.1. Main Technologies
- [Next.js](https://nextjs.org)
- [Redux](https://redux.js.org)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Prisma](https://prisma.io)
- [NextAuth.js](https://next-auth.js.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Sass](https://sass-lang.com)
- [React Bootstrap](https://react-bootstrap.github.io)
- [React Chart.js 2](https://react-chartjs-2.js.org)
- [tRPC](https://trpc.io)
- [Jest](https://jestjs.io)

### 1.2. Development Tools
- [Typescript](https://www.typescriptlang.org)
- [Prettier](https://prettier.io)
- [ESLint](https://eslint.org)


## 2. Getting Started

### 2.1. Verify Versions
```bash
node -v
next -v
yarn -v
```
**Note:** The recommended versions (tested during development) are:
- Node: v20.10.0 or higher.
- Next.js: v14.0.4
- Yarn: 1.22.19

### 2.2. Install dependencies
After verifying that the supported versions are installed, we can install
the project dependencies (listed in package.json) by running the command:
```bash
npm install
# or
yarn install
```
**Note:** yarn is preferred, as it has been tested during the development process.

### 2.3. Set up ENV variables
An example file (.env.local.example) is provided, to get started just crate
a copy of the file as follows:
```bash
cp .env.local.example .env
```

#### 2.3.1. Set up LinkedIn Auth Provider
You will need to fill the following ENV variables.
```dotenv
LINKEDIN_CLIENT_ID=""
LINKEDIN_CLIENT_SECRET=""
```
 To do so, please refer to
LinkedIn Developers portal 
[click here to visit](https://www.linkedin.com/developers/apps/).

Your configuration should look similar to:
![linkedin configuration](./README/auth-linked-config.png)

**Note:** # Verify that the authorized url matches your current setting and
do not forget to add /api/auth/callback/linkedin

E.g., http://localhost:3000/api/auth/callback/linkedins


# 3. Database
This project requires a postgres database to run. If your already have a local 
database, please fill the .ENV variables according.

If you don't have a local DB, a Docker compose is provided to provision one
(see section 3.1 below).

Once your database and .ENV are configured, please run the following command
to sync the database schema:
```bash
prisma db push
```

And afterwards, let's create the super admin user by running the 
seed data provided.
```bash
prisma db seed
```
**Note:** The seeder requires the ENV variable NEXTAUTH_ADMIN_PASSWORD

## 3.1. Docker Image
First, let's run the container:

```bash
docker compose up -d
```

And let's check that the container is up and running:
```bash
docker ps -a
```

To use the Postgres container, please use the following connection string:
```dotenv
"postgresql://postgres:postgres@localhost:5433/chg_app"
```
**Note:** the standard port 5432 has been changed to 5433 to avoid conflicts
with other Postgres installations.


## 4. Run Development Server
To test or develop the application, please use the following command:
```bash
npm run dev
# or
yarn dev
```
After running it your can open [http://localhost:3000](http://localhost:3000) 
with your browser to see the result.


## 5. Build and Deploy
To create a production build, please run
```bash
npm run build
# or
yarn build
```

### 5.1. Test build
Once you have created a production build, you can test it by running:
```bash
npm run start
# or
yarn start
```
After running it your can open [http://localhost:3000](http://localhost:3000) 
with your browser to see the result.

### 5.2. Deploy
Follow our deployment guides for 
[Vercel](https://create.t3.gg/en/deployment/vercel), 
[Netlify](https://create.t3.gg/en/deployment/netlify) 
and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## 6. Testing
```bash
npm run test
# or
yarn test
```

## 7. Learn More
To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:
- [Documentation](https://create.t3.gg/)
# FixMyRide
Description of Project : 
The project entails creating an intuitive website where users can describe their car problems in natural language. The system will employ machine learning and natural language processing techniques to match user inputs with a curated database of car issues and solutions. The project will likely have a database and a form where users can add in their own data or notes. You can ask the bot your issues, and it will display a solution from the database taking in your own notes as data or just getting data from the database. The bot will become more accurate when you give it more information; for example, if you know you are having engine problems, the chatbot will find its database for that specific vehicle and look for solutions for the engine problems you described.

Link to Project : https://docs.google.com/document/d/156CmjwOFb32ouTcxEMruUROF__OCIV1zZDW6n-C5IJ4/edit?usp=sharing

https://docs.google.com/spreadsheets/d/1h_Do586k0NvOonboKKXS65bsljQuaFtt8gWu482F_1Q/edit?usp=sharing

How to install: pnpm install install ai @google/generative-ai openai ai prisma @prisma/client @pinecone-database/pinecone @clerk/nextjs @clerk/themes next-themes prettier eslint-config-prettier prettier-plugin-tailwindcss

Create an .env.local file with the following API Keys:
DATABASE_URL= mongodb
CLERK_SECRET_KEY= Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= Clerk
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/notes
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/notes

OPENAI_API_KEY= OpenAI Key

PINECONE_API_KEY= Pinecone API Key

npm update
npx shadcn-ui@latest init  
npx prisma generate
npm run dev

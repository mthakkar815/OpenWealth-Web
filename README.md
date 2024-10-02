# OpenWealth - Web Version

OpenWealth is a decentralized finance (DeFi) platform

## Table of Contents

- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Available Scripts](#available-scripts)

---

## Tech Stack

### Core Technologies

- **React.js**
- **Next.js**
- **TypeScript**
- **Redux**
- **Tailwind CSS**
  
### API & Data Handling

- **Axios**
- **Coingecko API**

### Developer Tools

- **ESLint**
- **Prettier**

---

## Installation

Follow these steps to set up the project on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/mthakkar815/openwealth-web.git
   cd openwealth-web

2. Install dependencies:
    
    ```bash
    npm install
    
3. Create the .env file with environment variables:
    ```bash
    touch .env
    
4. Add the following content to the .env file:
    
    ```bash
    NEXT_PUBLIC_API_BASE_URL=https://api.coingecko.com/api/v3
    
    Environment Variables

The project uses environment variables to manage API URLs and other sensitive information. Make sure to define the required variables in the .env file.

## Running the Project

After completing the installation and setting up the environment variables, you can start the project locally.

1.	Start the development server:
    
    ```bash
    npm run dev

2.	Open your browser and navigate to http://localhost:3000 to view the application.

## Available Scripts

	• npm run dev
	• npm run build
	• npm run start
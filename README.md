# IQ Lab Website
This is a Website project of "IQ LAB".

### Requirements
- Node.js 18+ and npm

## Getting Started

First, make sure you have `.env.local` file with the following content:

```bash
NEXT_PUBLIC_SANITY_PRJECT_ID="ID_HERE"
NEXT_PUBLIC_SANITY_DATASET="production" // keep it as production
```

Second, install npm packages and run the development server:

```bash
npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Short Project Structure

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── hooks                       # Client side React function hooks
│   ├── sanity                      # All Sanity related files
│   ├── widgets                     # Exactly like components but for pages.
│   ├── libs                        # 3rd party libraries configuration
│   ├── assets                      # Assets folder
│   │   └── styles                  # Styles folder
│   ├── utils                       # Utilities folder
└── tsconfig.json                   # TypeScript configuration
```

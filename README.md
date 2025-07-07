# IQ Lab Website

This the IQ Lab website project

### Requirements

- Node.js 18+ and npm

## Getting Started

First, make sure you have `.env.local` file with the following content:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=ID_HERE
NEXT_PUBLIC_SANITY_DATASET=production # develop or production
NEXT_PUBLIC_SANITY_API_KEY=KEY_HERE
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=KEY_HERE
```

See `.env.local.example`.

Second, install npm packages and run the development server:

```bash
npm install && npm run dev
```

Open [http://localhost:3010](http://localhost:3010) with your browser to see the result.

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

## Figma designs

[Desktop](https://www.figma.com/proto/2WadfyryuUgXL3ofqyubDE/IQ-LAB-Website-UI?page-id=65%3A63&node-id=65-64&viewport=370%2C125%2C0.17&t=o9RI6RRIyZ4RdkdY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=65%3A64&show-proto-sidebar=1)

[Tablet](https://www.figma.com/proto/2WadfyryuUgXL3ofqyubDE/IQ-LAB-Website-UI?page-id=613%3A9670&node-id=613-12849&viewport=479%2C339%2C0.1&t=Cy39Qxmgt7e6zbCv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=613%3A12849&show-proto-sidebar=1)

[Mobile](https://www.figma.com/proto/2WadfyryuUgXL3ofqyubDE/IQ-LAB-Website-UI?page-id=836%3A23400&node-id=836-23401&viewport=773%2C281%2C0.2&t=2tIIhO7Tl8ScK5BR-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=836%3A23401&show-proto-sidebar=1)

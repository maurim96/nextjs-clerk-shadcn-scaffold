
# Next JS Scaffold App

Welcome to the official Next JS Scaffold repository. This project is designed to kickstart your web app development with [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), providing a robust framework that integrates the best practices and tools needed to build high-quality web applications efficiently.

## Purpose and Benefits

This scaffold aims to reduce the initial setup time and complexity by providing a ready-to-use Next JS application structure. It leverages the power of Next JS, GraphQL, Clerk for authentication,  and more, enabling developers to focus on building unique features right from the start.

## Powered by

<p align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://reactnative.dev/docs/getting-started">
          <img src="https://github.com/maurim96/rn-expo-scaffold/assets/22548752/4d0785be-9a90-40af-9950-5bb4012128a4" width="100" height="80" alt="Next JS logo"><br/>
          Next JS
        </a>
      </td>
      <td align="center">
        <a href="https://clerk.com/docs">
          <img src="https://github.com/maurim96/rn-expo-scaffold/assets/22548752/f2f691e0-c06f-45e8-96c8-580fa83a986e" width="160" height="80" alt="Clerk logo"><br/>
          Clerk
        </a>
      </td>
      <td align="center">
        <a href="https://clerk.com/docs">
          <img src="https://github.com/maurim96/rn-expo-scaffold/assets/22548752/f2f691e0-c06f-45e8-96c8-580fa83a986e" width="160" height="80" alt="Clerk logo"><br/>
          Shadcn
        </a>
      </td>
      <td align="center">
        <a href="https://www.apollographql.com/docs/react/">
          <img src="https://github.com/maurim96/rn-expo-scaffold/assets/22548752/87271779-89e3-4996-9e6b-020e3b42881e" width="160" height="80" alt="Apollo GraphQL logo"><br/>
          Apollo Client
        </a>
      </td>
      <td align="center">
        <a href="https://graphql.org/learn/">
          <img src="https://github.com/maurim96/rn-expo-scaffold/assets/22548752/8004d1a6-22d1-4b51-bf7e-4ff6be0b84ed" width="160" height="80" alt="GraphQL logo"><br/>
          GraphQL
        </a>
      </td>
      <td align="center">
        <a href="https://the-guild.dev/graphql/codegen">
          <img src="https://github.com/maurim96/rn-expo-scaffold/assets/22548752/b63a0abb-b4d0-4e24-a29a-50d218d5f747" width="140" height="80" alt="GraphQL logo"><br/>
          GraphQL CodeGen
        </a>
      </td>
    </tr>
  </table>
</p>


## Major Dependencies

- Next JS for the web app framework.
- Apollo Client for GraphQL integration.
- Clerk for secure authentication.
- Tailwind CSS for styling.

## What's inside

- `./src`: The main directory of application.
    - `/graphql-types`: Provides GraphQL types for the applications.
    - `/app/`: Core functionality of the application.
    - `/lib/`: Library with functions and helpers.
    - `/components/`: Reusable components.
    - `/hooks/`: Custom React hooks.
- `tailwind.config.ts`: Tailwind CSS configuration.


## Getting Started

### Prerequisites

- Volta (ideally)
- Node.js (`18.17.0`)

### Repository Setup

Clone the repository and install dependencies:

```bash
git clone git@github.com:maurim96/rn-expo-scaffold.git
cd rn-expo-scaffold
npm install
```

### Generating GraphQL Code

#### Prerequisities
- Have the API up and running in propper endpoint + port (you can refer to the [NestJs + GraphQl API Scaffold](https://github.com/maurim96/nestjs-graphql-scaffold))
- Run the command:

  ```bash
  npm run gen:gql
  ```


### Environment Variables

To manage environment variables, consider using `dotenv` or a similar package. Create `.env` files for different environments (`.env.development`, `.env.production`, etc.). Remember to configure the necessary variables for API endpoints, feature flags, etc., without exposing sensitive information.


### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting

### Features

- _Intuitive UI_: Utilizing Tailwind CSS for responsive and aesthetic design.
- _GraphQL Integration_: Efficient data management.
- _Custom Hooks_: Enhance functionality and reusability.

### Develop

You'll need `.env`. Ask someone on the team.

To develop all apps and packages, first install the dependencies by running:

```
npm install
```

Run dev version

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result (check port in case you're using also the [NestJs API Scaffold](https://github.com/maurim96/nestjs-graphql-scaffold)).

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Contribution Guidelines

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with clear, descriptive messages.
4. Push your changes and submit a pull request.

Please adhere to the coding standards and commit message guidelines provided in the repository.

## Troubleshooting and FAQ

Encounter an issue? Check out the FAQ or troubleshooting section in our documentation for common problems and solutions. If you still need help, please file an issue on GitHub with a detailed description of the problem.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### License

This project is [UNLICENSED](LICENSE). Feel free to use it according to the terms of the license.
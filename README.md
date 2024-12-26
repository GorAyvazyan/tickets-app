# This project is a Flight Ticket Booking Platform that allows users to browse and purchase flight tickets.

### Key Features

#### 1. **Ticket Listing and Pagination**

- **Pagination:** The application supports pagination, allowing users to browse through a large number of flight tickets
  without overwhelming the UI.
- **Ticket Sorting:** The tickets are sorted by price in ascending order for easy comparison.
- **Filter by Stops:** Users can filter tickets based on the number of stops (direct flights or with layovers).

#### 2. **Flight Ticket Information**

- **Flight Details:** Each ticket displays essential details including the origin, destination, carrier, departure and
  arrival dates and times, and ticket price.
- **Dynamic Date Formatting:** Dates are formatted in a user-friendly way using the date-fns library, converting from
  the input format (e.g., "12.05.18") to a readable format (e.g., "12 May 2018, Mon").

#### 3. **Ticket Purchase**

- **Purchase Flow:** Users can simulate purchasing a ticket by clicking the "Купить" (Buy) button. An alert confirms the
  successful purchase.

#### 4. **Performance Optimizations**

- **Efficient Ticket Loading:** Only the necessary ticket data is fetched, minimizing network overhead.
- **Grid Layout:** The tickets are displayed in a responsive grid that adapts to various screen sizes.

#### 5. **State Management with React + Vite and TypeScript**

- **Type Safety:** The project is written in TypeScript for better type safety and maintainability.

#### 6. **Tech Stack**

- **Frontend: React + Vite, TypeScript, Tailwind CSS, Shadcn UI**
- **State Management: React hooks**
- **API Integration: Mock API for ticket data**
- **Date Handling: date-fns library for formatting dates**
- **UI Components: Custom UI components using Tailwind CSS**

## Get Started

### Installation

We use `yarn` as a package manager: [pnpm](https://yarnpkg.com/)

```sh
# Install all dependencies
yarn install
```

#### Commands

```sh
// Run development
yarn dev
```

#### Building

```sh
// Build
yarn build
```

#### Lint and Prettier

```sh
yarn lint
yarn lint:fix
yarn prettier
```

## Conventions and Best Practices

- [Introduction](#introduction)
- [Commits and commit messages](#commits-and-commit-messages)
- [Code Quality](#code-quality)
- [Code Formatting](#code-formatting)
- [Linting](#linting)
- [Code Reviews](#code-reviews)
- [Never push directly to master](#never-push-directly-to-master)

### Introduction

This document contains various conventions and best practices that we strive to adhere.

### Commits and commit messages

#### Conventional Commits

- Commit messages should be stylistically consistent and follow
  [Conventional Commits](https://www.conventionalcommits.org) specification. We have enabled pre-hook which check
  commit, if it suits conventional commit styles.

### Code Quality

#### Code formatting

- We use [prettier](https://prettier.io).
- To make it really convenient and seamless we recommended installing `prettier` as your code editor plugin and set up
  in your IDE settings.
- We are running `eslint | prettier` with scripts mentioned above

### Linting

We use `eslint` to keep our source code clean.

- We have enabled pre-hook which check commit, if it suits eslint styles.

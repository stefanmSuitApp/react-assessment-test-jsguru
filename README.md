# React Assessment Test

## Overview

This project is an interview exercise completed within a 3-day timeframe. The
task involved creating a React application using TypeScript, and
StyledComponents. The project integrates with the JSONPlaceholder API, utilizing
React Query for data fetching, and adheres to the constraint of avoiding state
management libraries.

## Features

1. **Header and Footer:**

   - The application features a header and footer with a logo and navigation.

2. **Home Page:**

   - Displays posts with the author's name (User).
   - Enables the display of comments for a selected post with an expanded
     option.
   - Provides a detailed view of a post by clicking on it.
   - The header includes a search functionality for posts based on the author's
     name (User).

3. **Image Library:**
   - Allows users to browse images using pagination.
   - Provides the option to choose a random limit for image display.

## Tech Stack

- React
- TypeScript
- Vite
- StyledComponents
- React Query
- JSONPlaceholder API
- No state management libraries used

## Getting Started

1. **Clone the project:**

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Rename .env.example to .env.**

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Explore the application locally.**

   Open your preferred web browser and go to
   [http://localhost:3000](http://localhost:3000). This will take you to the
   home page of the application. Additional scripts, such as linting and
   building, are available in the package.json file.

## Dependencies

Notable dependencies include:

- **[@tanstack/react-query](https://react-query.tanstack.com/):** For efficient
  data fetching.
- **[axios](https://axios-http.com/):** For making HTTP requests.
- **[styled-components](https://styled-components.com/):** For styling
  components.
- **[react-router-dom](https://reactrouter.com/):** For handling navigation.
- **[i18next](https://www.i18next.com/):** For internationalization.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint for code linting.
- `npm run preview`: Preview the production build locally.

## Development Environment

- **ESLint:** Enforces code quality and style.
- **TypeScript:** Enhances code reliability through static typing.
- **Vite:** Fast and efficient development server and bundler.

Feel free to explore and customize the project as needed. If you have any
questions or feedback, please contact the project owner.

Happy coding!

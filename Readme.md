# Playwright TypeScript gRPC Testing Framework

This repository provides a testing framework that integrates [Playwright](https://playwright.dev/) with gRPC services using TypeScript. It tests CRUD operations for gRPC servers.

## Project Structure

- **specs/**: Includes Playwright test specifications for automating browser interactions and validating application behavior.
- **server.ts**: Sets up a local gRPC server for testing purposes.
- **package.json**: Manages project dependencies and scripts.

## Getting Started

Follow these steps to set up and run the tests:

1. **Install Dependencies**: Run `npm install` to install all necessary packages as specified in the `package.json` file.

2. **Start the gRPC Server**: Execute `node server.ts` to start the local gRPC server.

3. **Run Playwright Tests**: Use `npx playwright test` to execute the test scripts located in the `specs/` directory.

## Notes

- Ensure that you have [Node.js](https://nodejs.org/) installed on your system.
- The gRPC server must be running before executing the Playwright tests to ensure proper communication.
- For more information on Playwright and gRPC, refer to their official documentation.


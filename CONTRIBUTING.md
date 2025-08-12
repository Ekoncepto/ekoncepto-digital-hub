# Contributing to E-Koncepto Digital Hub

Thank you for your interest in contributing to E-Koncepto Digital Hub! We appreciate your time and effort. This document provides guidelines for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style](#code-style)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)
- [License](#license)

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
   ```bash
   git clone https://github.com/your-username/ekoncepto-digital-hub.git
   cd ekoncepto-digital-hub
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```

## Development Workflow

1. Create a new branch for your feature or bugfix
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-number-description
   ```

2. Make your changes

3. Stage your changes
   ```bash
   git add .
   ```

4. Commit your changes following the [commit guidelines](#commit-guidelines)
   ```bash
   git commit -m "feat: add new feature"
   ```

5. Push your changes to your fork
   ```bash
   git push origin your-branch-name
   ```

6. Open a pull request from your fork to the main repository

## Code Style

- Follow the [TypeScript](https://www.typescriptlang.org/docs/) and [React](https://reactjs.org/docs/getting-started.html) best practices
- Use [Prettier](https://prettier.io/) for code formatting
- Follow the existing code style and naming conventions
- Write meaningful component and variable names
- Keep components small and focused on a single responsibility
- Use functional components with TypeScript interfaces for props

### Linting

We use ESLint for static code analysis. Run the linter before committing:

```bash
npm run lint
```

To automatically fix linting issues:

```bash
npm run lint:fix
```

### Formatting

We use Prettier for code formatting. To format your code:

```bash
npm run format
```

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Please format your commit messages as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files

### Examples

```
feat: add user authentication
```

```
fix: resolve issue with form validation

Closes #123
```

```
docs: update README with new setup instructions
```

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations, and container parameters
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](https://semver.org/)
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you

## Reporting Issues

When creating an issue, please include the following information:

- A clear and descriptive title
- A description of the issue
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser/OS version if applicable

## License

By contributing, you agree that your contributions will be licensed under the project's [LICENSE](LICENSE) file.

# Contributing to Simple Toast

Thank you for considering contributing to Simple Toast! This document provides guidelines for contributing to this project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/simple-toast.git`
3. Install dependencies: `npm install`
4. Make your changes
5. Build: `npm run build`
6. Test your changes with the example files in `example/`

## Development

- Source code is in `src/`
- Examples are in `example/`
- Build output goes to `dist/`

### Build Commands

```bash
npm run build    # Build production version
npm run dev      # Watch mode for development
```

## Code Style

- Use ES6+ features
- Follow existing code style
- Add comments for complex logic
- Keep functions small and focused

## Testing

Before submitting a PR:

1. Test all toast types (success, error, info, warning)
2. Test all position options
3. Test both light and dark themes
4. Test on multiple browsers
5. Verify no console errors
6. Check that the container is properly removed when empty

## Pull Request Process

1. Update the README.md if needed
2. Update CHANGELOG.md with your changes
3. Ensure your code builds without errors
4. Write clear commit messages
5. Create a pull request with a clear description

## Reporting Issues

When reporting issues, please include:

- Browser and version
- Steps to reproduce
- Expected behavior
- Actual behavior
- Any console errors

## Feature Requests

Feature requests are welcome! Please open an issue to discuss new features before implementing them.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

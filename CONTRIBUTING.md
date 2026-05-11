# Contributing to OpenAthletics

First off, thank you for considering contributing to OpenAthletics! It's people like you who make this a great tool for the athletic community.

## Branching Policy

> [!IMPORTANT]
> All Pull Requests must be targeted to the **\`dev\`** branch. The \`main\` branch is reserved for stable production releases.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How Can I Contribute?

### Reporting Bugs

- Check the [Issues](https://github.com/MenachoIvan/open-athletics/issues) tab to see if the bug has already been reported.
- If not, open a new issue with a clear title, steps to reproduce, and expected vs actual behavior.

### Suggesting Enhancements

- Open an issue with the tag `enhancement`.
- Describe the feature and why it would be useful for athletes.

### Your First Code Contribution

1. Look for issues labeled `good first issue`.
2. Fork the repository.
3. **Important**: Create your feature branch based on the **\`dev\`** branch:
   `git checkout dev`
   `git pull origin dev`
   `git checkout -b feature/your-feature-name`
4. Make your changes and commit them: `git commit -m "feat: add heart rate zones logic"`.
5. Push to your fork and submit a **Pull Request** to our **\`dev\`** branch.

## Style Guidelines

- **Clean Code**: We avoid external libraries for simple tasks (like date calculations) to keep the bundle light.
- **TypeScript**: All new code must be strictly typed. Avoid `any`.
- **Naming**: Use English for all code, comments, and documentation.
- **CSS**: Use Tailwind CSS utility classes. Avoid custom CSS files unless strictly necessary.

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

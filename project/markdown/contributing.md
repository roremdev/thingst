### 🔨 Branches

> Definition of rules for the creation of branches.

| Label                                                                            | Description                                                | Format                   |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------ |
| ![feat](https://img.shields.io/badge/✨_feat-2E3440?style=for-the-badge)         | Add a new feature.                                         | `feat/<module-name>`     |
| ![fix](https://img.shields.io/badge/🐛_fix-2E3440?style=for-the-badge)           | Fix a bug.                                                 | `fix/<module-name>`      |
| ![refactor](https://img.shields.io/badge/♻️_refactor-2E3440?style=for-the-badge) | A code change that neither fixes a bug nor adds a feature. | `refactor/<module-name>` |
| ![docs](https://img.shields.io/badge/📚_docs-2E3440?style=for-the-badge)         | Add documentation changes.                                 | `docs/<module-name>`     |

### 🚧 Commits

Husky is a tool that helps you to configure git hooks. Since the reason for use git hooks because each commit has
the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) structure.

| Type    | Commit                         | Description                                                                                                |
| ------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| test    | `test: 🚨 [message]`           | Adding missing or correcting existing tests                                                                |
| release | `chore(release): 🚀 [message]` | Code deployment or publishing to external repositories                                                     |
| build   | `build: 📦 [message]`          | Changes related to build processes                                                                         |
| deps    | `chore(deps): 🔗 [message]`    | Add or delete dependencies                                                                                 |
| ci      | `ci: 👷 [message]`             | Changes related to the continuous integration system                                                       |
| chore   | `chore: 🔧 [message]`          | Changes to the build process or auxiliary tools and libraries such as documentation generation             |
| perf    | `perf: ⚡ [message]`           | A code change that improves performance                                                                    |
| refac   | `refactor: ♻️ [message]`       | A code change that neither fixes a bug nor adds a feature                                                  |
| style   | `style: 🎨 [message]`          | Add changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| docs    | `docs: 📚 [message]`           | Add documentation changes                                                                                  |
| removed | `removed: 🔥 [message]`        | Changes on removed files                                                                                   |
| fix     | `fix: 🐛 [message]`            | Fix a bug                                                                                                  |
| feat    | `feat: ✨ [message]`           | Add a new feature                                                                                          |

### 📌 Following Comments

| Tag                                                                           | Description                       |
| ----------------------------------------------------------------------------- | --------------------------------- |
| ![question](https://img.shields.io/badge/question-8FBCBB?style=for-the-badge) | Further information is requested. |

### 🏷 Labels

#### Pull Request

| Name                      | Description                                                                      |
| ------------------------- | -------------------------------------------------------------------------------- |
| ![target][target]         | Changes on determinate environments.                                             |
| ![deployment][deployment] | Indicates a release version is ready testing, staging or production environment. |
| ![docs][docs]             | Indicates a need for improvements or additions to documentation.                 |
| ![review][review]         | Indicates that the changes needs a revision.                                     |
| ![bug][bug]               | Indicates an unexpected problem or unintended behavior.                          |

#### Issue

| Name                  | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| ![feat][feat]         | Indicates that a feature has been developed.                |
| ![refactor][refactor] | Indicates that the operation of a feature has been changed. |
| ![fix][fix]           | Indicates that a bug or malfunction has been corrected.     |

[target]: https://img.shields.io/badge/Target-D08770?style=for-the-badge
[bug]: https://img.shields.io/badge/Bug-BF616A?style=for-the-badge
[deployment]: https://img.shields.io/badge/Deployment-A3BE8C?style=for-the-badge
[docs]: https://img.shields.io/badge/Documentation-5E81AC?style=for-the-badge
[review]: https://img.shields.io/badge/Review-B48EAD?style=for-the-badge
[feat]: https://img.shields.io/badge/✨_feat-ECEFF4?style=for-the-badge
[refactor]: https://img.shields.io/badge/♻️_refactor-ECEFF4?style=for-the-badge
[fix]: https://img.shields.io/badge/🐛_fix-ECEFF4?style=for-the-badge

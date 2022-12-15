# Hold Deposit Mobile

### Project structure
We use a feature-first approach to structure project.

Main folders are in *src*

- assets (contains images, fonts, mocked data)
- common (contains everything that might be used across all features - components, hooks, service and etc.)
- constants (constant values used throughout the project)
- features (contains folder with features, these folders contain everything that is used in this feature only - components, hooks, screens and etc.)
- store (contains everything related to the redux and thunks)
- types (contains types and interfaces that are used throughout the project)
- utils (contains utility functions)

### Main libraries

- react-navigation
- react-native-gesture-handler
- react-native-reanimated
- react-native-reanimated-carousel
- react-native-maps
- react-native-vector-icons

### Working with branches

When you start working on a task you create a new branch from **main** branch.

The name of the new branch is like **feature/{ticket} or {feature name}**.

After you finish with your ticket, you create one commit and create a PR to **main** branch.

Try to avoid pushing to **main** directly as much as possible.

If you want to add feature, that doesn't have a ticket - branch name should be like **case/what-you-doing** (fix/input-validation).

Commit names are short and must describe what was done.

# Creat React App + StoryBook + Cypress Component Testing

This is an example of how storybook and cypress can work together hand in hand.

## Command

`yarn cy` opens the cypress component testing environment.

## How to setup Storybook with cypress component testing

1. Create react app `yarn create create-app <project-name>`
2. Initialize storybook using `npx -p @storybook/cli sb init`
3. Create stories in storybook ([src/stories/Button.stories.tsx](src/stories/Button.stories.tsx))
4. Add cypress component testing via `yarn create cypress-tests`
5. Install the link library `yarn add -D @storybook/testing-react`
6. Load `.storybook/preview` in `cypress/support` to install all storybook globals and decorators in cypress ([cypress/support/index.js](cypress/support/index.js))
7. Mount stories in cypress tests ([src/stories/Button.test.tsx](src/stories/Button.test.tsx))

## To install cypress

See the cypress directory

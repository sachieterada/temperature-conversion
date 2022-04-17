# Temperature Conversion

This is an application that converts between Celsius and Fahrenheit.

The UI is mobile friendly. I used media queries to make the design responsive.

User input is validated and the text area turns red on invalid input. Fractional numbers are also supported (`20.5` celsius for example).

I also implemented a dark mode. The users choice is persisted in local storage so that next time they visit the page the settings are remembered.

## Tools used

### React.js / create-react-app

I chose React.js to build this app because I'm most familiar with it and it's a very popular choice. I use a new feature from React 16.8 called React Hooks: Components can be built by combining simple functions without dealing with complicated classes. Components can then be used as building blocks in more complex pages.

### Typescript

Typescript can catch mistakes while you're writing code in your editor. That way more issues are caught before they affect real users.

### tailwindcs

With tailwindcss it's easy to style pages rapidly. It has very good defaults so pages always have consistent styling. It also has a set of utility classes for building responsive designs and dark mode themes.

### Prettier

Prettier is a code formatter. It's effective when developing in teams where source code is shared. It ensures that the code is always written in the same style. It also works as a code linter and finds various problems with the code.

## Setup

### `yarn start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.

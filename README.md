# WHAT?

A simple project that helped me practice building Web UI with [React.js](https://react.dev/).
The goal was to understand the minimal requirements to use React, and play around with [the main concepts](https://react.dev/learn/thinking-in-react):
  - Components
  - State
  - Inverse data flow


# TIMELINE

1. First I tried to setup a simple React project using NPM and WEBPACK (commit [#c1436e6](https://github.com/nigini/react-playground/commit/c1436e663533e2f387e64aac70840599dbd8eaac))
2. Then I added a simple Hello component and used BOOTSTRAP to make it all look nicer (commit [#6d82a8d](https://github.com/nigini/react-playground/commit/6d82a8d23936e559980bea5054e026b135fbcf97))
3. Passing a PROP to the Component (commit[#71f036d](https://github.com/nigini/react-playground/commit/71f036df62af8d74cce05ac251812a3bf7bdb28c))
4. Created a simple button Component and a Page with a state (commit [#8cab81b](https://github.com/nigini/react-playground/commit/8cab81b9ef6a47d0a7d594dc07919d73b573de6d))

## NEXT STEPS

1. Finishing up a ClickGame that tracks how fast one can click some buttons on the screen.
2. Get a litte more sophisticated with CSS & SASS

# EXECUTE

To run this project you will need NODE and NPM installed. I tried it with:
  - Node (18.13.0) + NPM (9.6.7)
  - Node (20.10.0) + NPM (10.2.3)

Execute it with:
```shell
> npm install
# DIST
> npm build
# DEV
> npm serve
```

# REFERENCES

It was interesting to me that the React.js documentation was of little help to bootstrap this project, as they argue that you should start from a fullstack project setup.
I did not want that, so here are the two main references for **BOOTSTRAPING a basic React UI project:**

1. [Fireship on Webpack - YouTube](https://www.youtube.com/watch?v=5IG4UmULyoA)
2. [RiyaNegi on Setting up React Manually - Dev.to](https://dev.to/riyanegi/setting-up-webpack-5-with-react-and-babel-from-scratch-2021-271l)

There are easier ways to do that, obviously (I just wanted to understand each step of it):

1. [Cli to create React Apps in different flavours](https://create-react-app.dev/)
2. [React documentation on how to start projects](https://react.dev/learn/start-a-new-react-project)

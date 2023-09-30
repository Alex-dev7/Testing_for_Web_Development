// -------  Getting Started with Jest

// Before we can begin testing our code, the jest package must first be installed and configured. Thankfully, Jest is the default test runner included and preconfigured in create-react-app. There is no further installation necessary when using create-react-app to build a new app!

// To begin testing, we need to make sure that our test files are located, or match the following name conventions under the /src top-level directory:

//  - files with names ending in .test.js
//  - files with names ending in .spec.js
//  - .js files within a __tests__/ directory


// How you store test files in your project may depend on your specific needs. You may choose to colocate test files with the code being tested or to separate them into a __tests__ directory. For the purpose of this course, we will be colocating our test files with the code being tested.

// Our file structure will look like this:

// src/
// └── Button/
//     ├── Button.js
//     └── Button.test.js

// It is a good practice to match the name of the test file to the file that you want to test. For example, if you were to test a file called math.js, you might create a file called math.test.js.

// Once you have your test files created (more on writing test logic in the upcoming exercises), you can run the test using the npm command:

// npm test

// This will launch the test in watch mode, allowing the test to re-run every time the file is saved! You’ll need to type q in the terminal to quit out of the watch mode.
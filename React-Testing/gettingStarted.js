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


// 

// --------   Configuring Jest

// Before we move on to actually writing our tests, we should cover a few best practices.

// By default, each test produces the terminal output that we saw in the previous exercise. Jest allows us to customize this output by using command line flags. Though there are many command-line flags (https://jestjs.io/docs/cli#reference), one of the most commonly used is the --coverage flag:

// npm test -- --coverage

// Make sure to note the double dash between the npm test and --coverage. This is to separate the arguments from the test command itself. This --coverage flag allows us to get a report of which lines of our code were actually tested. In addition to being outputted in the terminal, this report becomes available in a directory named coverage/ that is created at runtime.

// This report can help us ensure our code has been thoroughly tested. From the report, we can see that there are four categories of our code that are being analyzed:

//  -Statement // coverage analyzes the percentage of the program’s statements that have been executed.
//  -Branch // coverage analyzes the percentage of the program’s edge cases that have been executed.
//  -Function //  coverage analyzes the percent of the program’s functions that have been called during testing.
//  -Line // coverage analyzes the percentage of the program’s executable lines in the source file that have been executed.


// Currently, each of those sections will show up at 0% coverage which makes sense – we haven’t written any tests yet! Strategies for interpreting and analyzing this coverage report are outside of the scope of this lesson, however, you should keep an eye on how this report changes as we continue to write our tests.
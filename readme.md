## Fullstack Developer Technical Test

**Objective:**

This test is designed to evaluate your understanding of full-stack development using Typescript, node.js, express.js, and React. We are particularly interested in how you work with an existing codebase, your code cleanliness, architecture, and your ability to work within a time constraint.

We are not judging you on your design skills, so please don't spend time on the UI design, just use the library. We are more interested in seeing how you structure your code and how you approach the tasks.

You will be provided with a partially completed project where you need to implement new features and refactor some of the existing code.

The test duration is 60 minutes. You are not expected to complete all the tasks within the given time. We are more interested in seeing how you approach the tasks and how you structure your code.

**Instructions:**

1. You will be given access to a Git repository containing a basic web application. The application has been partially developed using Typescript, node.js, express.js, and React.

2. The backend API is missing some functionality, and the frontend needs a new feature added. Additionally, some parts of the code are not clean and may require refactoring.

3. The Frontend and Backend are in separate folders. The Frontend is in the `web` folder, and the Backend is in the `api` folder.

4. Use the libraries and tools that you are most comfortable with. You are free to add any additional libraries or tools that you think are necessary.

5. The UI need to be done with NextUI with/or TailwindCSS. You can't use any other UI library.

(NextUI Docs)[https://nextui.org/docs/getting-started]

**Tasks:**

**1. Backend - Add new endpoint**

A. Add an endpoint to the Express.js server that retrieves user profiles from a JSON file stored in the server's file system.

The endpoint route should be: `/users`

It should support the following operations:

- GET: Retrieve a list of all users.
- GET: Retrieve a single user by ID.
- POST: Add a new user

Remember to handle possible errors and return appropriate HTTP status codes.

**2. Frontend - New Feature**

A. Use React and Typescript to create a new pages that interacts with the new backend endpoint you've created.

The /users page should:

- Display a list of all users when it is loaded.
- Include a form in a modal to add a new user to the list. After the form submission, the list should be updated to include the new user.

the /users/:id should:
- Display a user profile when it is loaded.

**3. Code Cleanup and Refactoring**

The task would be to refactor those files, improving the error handling, making it more efficient, removing duplicated code, validating incoming data more thoroughly, and modernizing it by converting it to TypeScript.

- File `api/clean_me.js`
- File `web/pages/clean_me.js`

**Submission:**

Please commit your code frequently with meaningful commit messages. This will help us understand your thought process and how you approach development tasks. Once you have completed the tasks, push your changes to the given repository.

**Evaluation:**

Your submission will be evaluated on the following criteria:

1. Correctness: Does your code do what it was asked to do?
2. Code quality: Is your code easy to understand and maintain? Have you followed common coding standards and best practices?
3. Code architecture: Have you structured your code in a logical and organized way?
4. Speed: Were you able to complete the tasks within the allotted time?

Best of luck!

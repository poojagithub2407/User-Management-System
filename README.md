# <span style="color:orange">User Management System</span>


## Snapshot of Project

## User List
![user-list](https://github.com/poojagithub2407/User-Management-System/assets/96479230/c6300383-8466-4151-84b9-d5ac8a28edf6)

## User-form
![user](https://github.com/poojagithub2407/User-Management-System/assets/96479230/84e0e421-429f-4ab5-92b7-4263b696785e)

## user-validation
![validation](https://github.com/poojagithub2407/User-Management-System/assets/96479230/f0591976-6499-49a1-b856-c6d040ea1c9d)

## User Update
![updateUser](https://github.com/poojagithub2407/User-Management-System/assets/96479230/e66c1d3a-bfec-4d0b-9edd-6ebea4bc42bd)


## Overview

This project implements a User Management System using Angular. It allows users to create, edit, and delete user information. The system includes modules for user management, components for user creation and listing, validation, data passing, and basic styling.

## Modules

### User Module

The User Module is responsible for managing user-related functionality. It includes:

- **User folder**: Contains module.ts file for routing to the user page.

### User-Upsert Component

The User-Upsert Component features a reactive form with the following fields:

- FirstName
- LastName
- Address
- Email
- Phone

Validation is applied to all fields, including email validation for the Email field and ensuring the Phone field accepts only 10-digit numbers. On form submission, the data is saved into a list. If the user is new, they are added to the list; if they already exist, their information is updated.

### User-List Component

The User-List Component displays all created user lists in a grid format. It includes columns for Name, Email, Phone, and Action. In the Action column, two buttons (Edit and Delete) are provided. Clicking the Edit button sends the user details to the User-Upsert Component, while clicking the Delete button removes the user from the list.

## Validation

The system checks whether the user already exists and displays an 'already exists' message if necessary. For this, the email ID property serves as the unique identifier.


## Styling

Basic styling is applied to make the application visually appealing. The system utilizes Bootstrap for styling.

## Integration with JSON Fake Server

The application integrates with JSON Fake Server to provide dummy user data for testing and development purposes. The server responds to HTTP requests with predefined JSON data, simulating a real API.

## Additional Points

A user interface for type casting is created, allowing for better data handling and manipulation. Initially, users are displayed in the grid using a dummy API that features user data.

## Technologies Used

- Angular
- Bootstrap
- JSON Fake Server

## Running the Project

### Angular Project

To run the Angular project, navigate to the root directory of your project in the terminal and execute the following command:

-- ng serve --open

This command will compile your Angular application and start a development server. The `--open` flag opens the application automatically in your default web browser.

### JSON Fake Server

To run the JSON Fake Server, follow these steps:

1. Install JSON Server globally if you haven't already installed it:

 - npm install -g json-server

2. Create a JSON file containing dummy data for your API. Let's say the file is named `db.json`.

3. Start the JSON Fake Server by running the following command in the terminal:

- json-server --watch data.json


This command starts the JSON Fake Server and watches the `db.json` file for changes. It serves the JSON data over HTTP as a RESTful API.

Ensure that your Angular application is configured to make HTTP requests to the correct endpoint served by the JSON Fake Server.




## Conclusion

The User Management System provides a comprehensive solution for managing user information effectively. It offers a user-friendly interface with validation, data passing, and basic styling features. The system can be extended and customized according to specific project requirements.

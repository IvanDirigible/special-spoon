# Note Taker
This is a simple application that can be used to write and save notes.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears
```

## Installation and Use

### Simple Installation
1. You only need navigate to the deployed site with the link below.

 ### In-Depth Installation
1. Download or clone the repository from GitHub with the link below.
2. Navigate to the repository with your code editor of choice. (VS Code recommended).
3. In the terminal, install the necessary packages. Such as:
  ```bash
  npm install
  ```
4. Then, start the app up:
  ```bash
  npm start
  ```
5. If a prompt does not pop up redirecting you to the app, you can copy the following into your browser of choice:
  ```bash
  http://localhost:3001/
  ```

### Usage

* From the homepage, click the 'Get Started' button.
* When you have given your note a title and text, you will see a 'Save Note' button appear in the top-right. Clicking this will save your note to the bar on the left.
* You can clear any text you have not yet saved by clicking the 'Clear Form' button in the top-right.
* You can click the title of any note on the left-hand bar to have it display in the main window. To start a new note while looking at your previously written notes, simply click the "New Note" button in the top-right.
* You can click the red trashcan icon next to any saved note to delete it.
> **An animated mock-up of the application can be found below.**

## Links

* GitHub: https://github.com/IvanDirigible/special-spoon
* Deployed: https://special-spoon-1d4f58be4218.herokuapp.com/

## Mock-Up

The following GIF shows the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./images/note-taker-demo.gif)

## License
This project is licensed under the MIT license.  
License Link  
https://opensource.org/licenses/MIT   
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
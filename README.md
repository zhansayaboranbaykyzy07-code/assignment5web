# Assignment #5 — JavaScript Basics

## Student Information

**Name:** Zhansaya  Boranbaikyzy
**Group:** SE-2540  

## Project Description

This project is a simple personal profile website created using HTML, CSS, and JavaScript.

The main purpose of this assignment is to practice JavaScript basics, DOM manipulation, and event handling.

The website allows the user to view and update profile information and manage a list of hobbies.

---

## Part 1: Profile Object, Data Types & Arithmetic

### Task 1: The Personal Info Object

I created a JavaScript object called `userProfile`.

The object contains different data types:

- `name` — string
- `birthYear` — number
- `isDeveloper` — boolean
- `hobbies` — array

The object is used to store the user's profile information.

```javascript
const userProfile = {
    name: "Жансая",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["Reading", "Music"]
};
```

### Task 2: Arithmetic Calculations

I used JavaScript arithmetic operations to calculate the user's current age.

The current year is obtained automatically, and the birth year is subtracted from it.

I also calculated the total number of hobbies using the array `length` property.

```javascript
const currentYear = new Date().getFullYear();
const age = currentYear - userProfile.birthYear;
const hobbiesCount = userProfile.hobbies.length;
```

The calculated information is displayed on the page and also printed in the browser console.

### Screenshot — Part 1

<img width="720" height="499" alt="image" src="https://github.com/user-attachments/assets/e12b0313-6fe7-4ea7-8d1b-dbbd2d13fb87" />


## Part 2: Form Input & Event Responses

### Task 3: HTML Form Setup

I created a simple form for updating the profile.

The form contains:

- Username input
- Birth Year input
- Create / Update Profile button

The user can enter their name and birth year into the form.

### Task 4: Event Listener

I used an event listener to handle the form submission.

When the user submits the form, JavaScript gets the values from the input fields and updates the `userProfile` object.

The age is then calculated again using the new birth year.

```javascript
profileForm.addEventListener("submit", function(event) {
    event.preventDefault();

    userProfile.name = usernameInput.value;
    userProfile.birthYear = Number(birthYearInput.value);

    const newAge = currentYear - userProfile.birthYear;
});
```

The updated information is displayed on the webpage using DOM manipulation.

### Screenshot — Part 2

<img width="727" height="499" alt="image" src="https://github.com/user-attachments/assets/ab60c834-4f3d-4892-98bc-c6e39837aba6" />


---

## Part 3: DOM List Manipulation

### Task 5: Creating & Removing Elements

I created an unordered list that contains the user's hobbies.

The website has two buttons:

- `Add Item` — adds a new hobby to the list.
- `Remove Item` — removes the last hobby from the list.

When the user enters a new hobby and clicks `Add Item`, JavaScript creates a new `li` element and adds it to the unordered list.

```javascript
const newItem = document.createElement("li");
newItem.textContent = hobby;
hobbyList.appendChild(newItem);
```

The `Remove Item` button removes the last element from the list.

```javascript
const lastItem = hobbyList.lastElementChild;

if (lastItem) {
    lastItem.remove();
}
```

This part demonstrates DOM manipulation because JavaScript creates, changes, and removes HTML elements.

### Screenshot — Part 3

<img width="706" height="370" alt="image" src="https://github.com/user-attachments/assets/70a70e47-e5f6-4b43-9109-ecccaea7ab71" />
<img width="710" height="362" alt="image" src="https://github.com/user-attachments/assets/f43231d8-4205-4372-a496-d239808e144d" />


---

## Work Process

First, I created the HTML structure of the website.

Then, I added CSS styles to make the website clean, simple, and easy to use.

After that, I created the `userProfile` object in JavaScript and added different data types such as a string, number, boolean, and array.

Next, I added calculations for the user's age and the number of hobbies.

After creating the profile form, I added an event listener to get the user's input and update the profile information.

Finally, I used DOM manipulation to add and remove hobby items from the list.

I tested the project in the browser to make sure that the form, buttons, calculations, and DOM elements work correctly.

---

## Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- Event Listeners

---

## Conclusion

This assignment helped me understand the basics of JavaScript and how JavaScript can interact with HTML elements.

I practiced working with objects, arrays, variables, arithmetic operations, event listeners, and DOM manipulation.

The final website allows the user to update their profile and add or remove hobbies.

The project was created individually and tested in the browser.

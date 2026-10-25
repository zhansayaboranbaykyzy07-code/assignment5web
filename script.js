const userProfile = {
    name: "Жансая",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["Reading", "Music"]
};

const currentYear = new Date().getFullYear();
const age = currentYear - userProfile.birthYear;
const hobbiesCount = userProfile.hobbies.length;

console.log("Age:", age);
console.log("Hobbies:", hobbiesCount);

const profileForm = document.getElementById("profileForm");

const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birthYear");

const profileName = document.getElementById("profileName");
const profileAge = document.getElementById("profileAge");
const profileHobbies = document.getElementById("profileHobbies");

const hobbyList = document.getElementById("hobbyList");
const newHobbyInput = document.getElementById("newHobby");

const addHobbyButton = document.getElementById("addHobby");
const removeHobbyButton = document.getElementById("removeHobby");

profileName.textContent = "Name: " + userProfile.name;
profileAge.textContent = "Age: " + age;
profileHobbies.textContent = "Hobbies: " + userProfile.hobbies.join(", ");

profileForm.addEventListener("submit", function(event) {
    event.preventDefault();

    userProfile.name = usernameInput.value;
    userProfile.birthYear = Number(birthYearInput.value);

    const newAge = currentYear - userProfile.birthYear;

    profileName.textContent = "Name: " + userProfile.name;
    profileAge.textContent = "Age: " + newAge;
    profileHobbies.textContent = "Hobbies: " + userProfile.hobbies.join(", ");
});

addHobbyButton.addEventListener("click", function() {
    const hobby = newHobbyInput.value;

    if (hobby === "") {
        return;
    }

    userProfile.hobbies.push(hobby);

    const newItem = document.createElement("li");
    newItem.textContent = hobby;

    hobbyList.appendChild(newItem);

    newHobbyInput.value = "";
});

removeHobbyButton.addEventListener("click", function() {
    const lastItem = hobbyList.lastElementChild;

    if (lastItem) {
        lastItem.remove();
        userProfile.hobbies.pop();
    }
});
let responses = {
    "hi": "Hello, how may I assist you today?",
    "hello": "Greetings! How can I help you?",
    "how to write hello world in javascript": "You can display 'Hello, World' in JavaScript using: console.log(\"Hello, World\");",
    "goodbye": "Goodbye! Feel free to return if you need further assistance.",
    "i need help": "Certainly! I'm here to assist you.",
    "what is your name": "My name is Chat Assistant. I'm here to support you.",
    "thank you": "You're most welcome. I'm glad to be of help.",
    "thankyou": "You're most welcome. I'm glad to be of help.",
    "what your name" : "My name is Chat Assistant, and I'm here to help you with anything you need. 😊How can I assist you today?",
    "most popular chatting app" :"most popular app is www.chatgpt.com"
};

let button = document.getElementById("btn");
let message = document.getElementById("message");
let input = document.getElementById("input");

button.addEventListener("click", function () {
    let userInput = input.value.trim().toLowerCase();

    if (userInput === "") {
        alert("Please enter a message");
    } else {
        let newElement = document.createElement("p");
        let newElements = document.createElement("ul");
        newElements.append(input.value)
        if (userInput in responses) {
            newElement.textContent = responses[userInput];
        } else {
            newElement.textContent = "Sorry, I don't understand that.";
        }
         message.appendChild(newElements)
        message.appendChild(newElement);

        input.value = ""; 
    }
});


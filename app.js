const noun1 = document.getElementById("noun-1")
const noun2 = document.getElementById("noun-2")
const verb1 = document.getElementById("verb-1")
const verb2 = document.getElementById("past-tense-verb")
const adjective = document.getElementById("adjective")

const verb1Input = document.getElementById("verb-1-input")
const noun1Input = document.getElementById("noun-1-input")
const adjectiveInput = document.getElementById("adjective-input")
const pastTenseVerbInput = document.getElementById("past-tense-verb-input")
const noun2Input = document.getElementById("noun-2-input")

const noun1Btn = document.getElementById("noun-1-button");
const noun2Btn = document.getElementById("noun-2-button");
const verb1Btn = document.getElementById("verb-1-button");
const verb2Btn = document.getElementById("verb-2-button");
const adjectiveBtn = document.getElementById("adjectiv-button");

const changeText = (elem, inputField) => {
    elem.textContent = inputField.value;
}

noun1Btn.addEventListener('click', () => {
    console.log(noun1, noun1Input);
    changeText(noun1, noun1Input);
})

noun2Btn.addEventListener('click', () => {
    console.log(noun1, noun1Input);
    changeText(noun1, noun1Input);
})

noun1Btn.addEventListener('click', () => {
    console.log(noun1, noun1Input);
    changeText(noun1, noun1Input);
})

noun1Btn.addEventListener('click', () => {
    console.log(noun1, noun1Input);
    changeText(noun1, noun1Input);
})


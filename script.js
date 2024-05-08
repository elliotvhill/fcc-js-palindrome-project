
/* VARIABLES */
const textInput = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")
const palindromeDefinition = document.getElementById("palindrome-definition")




/* FUNCTIONS */

// submit input
const submit = () => {
    if (!textInput.value) {
        alert('Please input a value')
        console.log(`Text input is blank`)
    }
    console.log(`Text input is: ${textInput.value}`)
    textInput.value = ""
}

// remove non-alphanum chars
const removeInvalidChars = () => {}

// check for palindrome
const isPalindrome = () => {}


/* EVENT LISTENERS */

checkBtn.addEventListener('click', submit)

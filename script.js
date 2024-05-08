
/* VARIABLES */
const textInput = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")
const palindromeDefinition = document.getElementById("palindrome-definition")




/* FUNCTIONS */

// is input empty? -> alert
const isInputEmpty = () => {
    if (!textInput.value) {
        alert('Please input a value')
    }
}

// remove non-alphanum chars
const removeInvalidChars = () => {}

// check for palindrome
const isPalindrome = () => {}


/* EVENT LISTENERS */

// input change
// textInput.addEventListener('change') // <- necessary?
// input submit
checkBtn.addEventListener('click', isInputEmpty)

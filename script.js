
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
    // remove non-alphanum chars
    let str = textInput.value
    const removeInvalidChars = (str) => {
        const regex = /\W+/g
        return str.replace(regex, "")
    }
    removeInvalidChars(textInput.value)
    console.log(removeInvalidChars(textInput.value))
    textInput.value = ""
}


// check for palindrome
const isPalindrome = () => {}


/* EVENT LISTENERS */

checkBtn.addEventListener('click', submit)


/* VARIABLES */
const textInput = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")
const palindromeDefinition = document.getElementById("palindrome-definition")




/* FUNCTIONS */


// submit input
const submit = () => {
    let str = textInput.value
    if (!str) {
        alert('Please input a value') // √
    } else {
        // remove non-alphanum chars √
        const removeInvalidChars = str => {
            const regex = /\W+/g
            return str.replace(regex, "")
        }
        removeInvalidChars(str)
        console.log(removeInvalidChars(str)) // √
        // check for palindrome
        let strArr = new Array(str)
        const isPalindrome = (str) => {
            let palindrome = [...strArr].reverse()
            if (strArr !== palindrome) {
                return console.log(`${strArr.join()} is not a palindrome`)
            } else {
                return console.log(`${strArr.join()} is a palindrome`)
            }
        }
        isPalindrome(textInput.value)
    }
    textInput.value = ""
}




/* EVENT LISTENERS */

checkBtn.addEventListener('click', submit)

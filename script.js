
/* VARIABLES */
const textInput = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")
const palindromeDefinition = document.getElementById("palindrome-definition")




/* FUNCTIONS */


// submit input
const submit = () => {
    let str = textInput.value
    let cleanStr;
    // check if input is empty
    if (!str) {
        alert('Please input a value') // √
    } else {
        // remove non-alphanum chars √
        const removeInvalidChars = str => {
            const regex = /\W+/g
            cleanStr = str.replace(regex, "")
            return cleanStr
        }
        removeInvalidChars(str) // √
        console.log(removeInvalidChars(str)) // √
        // check for palindrome
        let strArr = new Array(cleanStr)
        let palindrome = [...strArr].reverse().join() // join √ reverse X
        console.log(`Palindrome is: ${palindrome}`)
        const isPalindrome = (cleanStr) => {
            if (cleanStr !== palindrome) {
                return console.log(`${cleanStr} is not a palindrome`)
            } else {
                return console.log(`${cleanStr} is a palindrome`)
            }
        }
        isPalindrome(str)
    }
    textInput.value = ""
}




/* EVENT LISTENERS */

checkBtn.addEventListener('click', submit)

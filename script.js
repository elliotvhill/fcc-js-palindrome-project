
/* VARIABLES */
const textInput = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")
const palindromeDefinition = document.getElementById("palindrome-definition")




/* FUNCTIONS */


// submit input
const submit = () => {
    let str = textInput.value
    let cleanStr = [];
    // check if input is empty
    if (!str) {
        alert('Please input a value') // √
    } else {
        // remove non-alphanum chars √
        const removeInvalidChars = str => {
            const regex = /[^a-z0-9]/ig
            cleanStr = str.replace(regex, "")
            return cleanStr
        }
        removeInvalidChars(str) // √
        console.log(removeInvalidChars(str)) // √
        // check for palindrome
        let strArr = cleanStr.split("") // √
        console.log(strArr)
        let palindrome = strArr.reverse("").join("") // √
        console.log(`Palindrome is: ${palindrome.toLowerCase()}`)
        const isPalindrome = (str1, str2) => {
            if (str1.toLowerCase() !== str2.toLowerCase()) {
                return console.log(`${str} is not a palindrome`)
            } else {
                return console.log(`${str} is a palindrome`)
            }
        }
        isPalindrome(cleanStr, palindrome)
    }
    textInput.value = ""
}




/* EVENT LISTENERS */

checkBtn.addEventListener('click', submit)

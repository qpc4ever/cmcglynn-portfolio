function palindrome(str) {
    str = str.toLowerCase();
    if (str.split("").reverse().join("") === str) {
        document.getElementById("result").innerHTML = str + " is a Palindrome.";
    } else {
        document.getElementById("result").innerHTML = str + " is NOT a Palindrome.";
    }
}
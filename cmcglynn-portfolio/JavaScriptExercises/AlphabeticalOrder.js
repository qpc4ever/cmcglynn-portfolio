function wordAlph(str) {
    var changeChar = str.split('').sort().join('');

    document.getElementById("alph").innerHTML = changeChar;
}
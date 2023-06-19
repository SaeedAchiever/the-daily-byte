StringReverse = (str) =>{

    // Write a function that reverse any given string
    // in lower case

    return str.split("").reverse().join("").toLowerCase()
}
console.log(StringReverse("Hello")) // Returns olleh
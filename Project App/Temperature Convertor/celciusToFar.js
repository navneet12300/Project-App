
function convert() {
    let cel = document.getElementById("data").value;
    let far = cel * 1.8 + 32;
    document.querySelector("#res").innerText = `${cel} degree celcius is ${far} Fahrenheit`;
}
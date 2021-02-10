const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const result = document.getElementById("result")
function rechnen() {
    if (num1.value !== num2.value) {
        const summe = Number(num1.value) + Number(num2.value)
        result.innerHTML = summe;
    } else if (num1.value == num2.value) {
        const summe = (Number(num1.value) + Number(num2.value)) * 5
        result.innerHTML = summe;
    }
}
let num;
num = Number(prompt("digite um número qualquer: "));

if ( isNaN(num)) {

    alert("você não digitou um número!")

}
else {

    if (num % 2 == 0) {

        alert(num + "é um numero par.")

    } 
    else {
        alert (num +"é um  número impar.")
    }
}
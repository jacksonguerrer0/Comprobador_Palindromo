var palindrome, palindromeDos;
palidrome= "";
palindromeDos = "";
document.getElementById("resultados").style.display = "";
function Palindrome() {

    palindrome = document.getElementById("inputComprobador").value;

    palindromeDos = palindrome.toLowerCase().replace(/[\W_]/g, "");

    for (var i = 0, len = palindromeDos.length - 1; i < len / 2; i++) {
      if (palindromeDos[i] !== palindromeDos[len - i]) {
        return document.getElementById("resultados").value = "No es un palíndromo";
        
      }
    }
    return document.getElementById("resultados").value = "Si es un palíndromo";

  }

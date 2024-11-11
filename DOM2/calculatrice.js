function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
  }
  
  
function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
 
function calculate() {
    const display = document.getElementById("display");
    try {
     
      if (display.value.includes('/0')) {
        display.value = "Erreur";
      } else {
        // Évalue l'expression et affiche le résultat
        display.value = eval(display.value);
      }
    } catch (error) {
      display.value = "Erreur";
    }
  }
  
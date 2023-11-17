window.addEventListener("DOMContentLoaded", function() {
    let valorMedia = document.querySelector(".contador span:first-child");
    let mediaCircle = document.querySelector(".circulo");
    let paragraphResult = document.querySelector(".paragraph p");
  
    function calculo(event) {
      let reactionValue = document.querySelector(".rojo p:first-child");
      let memoryValue = document.querySelector(".amarillo p:first-child");
      let visualValue = document.querySelector(".azul p:first-child");
      let verbalValue = document.querySelector(".verde p:first-child");
  
      if (reactionValue && memoryValue && visualValue && verbalValue) {
        let reactionScore = +reactionValue.textContent;
        let memoryScore = +memoryValue.textContent;
        let visualScore = +visualValue.textContent;
        let verbalScore = +verbalValue.textContent;
  
        let media = Math.round((reactionScore + memoryScore + visualScore + verbalScore) / 4);
  
        valorMedia.textContent = media;
  
        if (media < 45) {
          mediaCircle.classList.remove("result-caution", "result-danger");
          mediaCircle.classList.add("result");
          paragraphResult.textContent = "Obtuviste menos del 45% de las personas que han realizado estas pruebas. Por favor, tenlo en cuenta.";
        } else if (media >= 45 && media <= 65) {
          mediaCircle.classList.remove("result", "result-danger");
          mediaCircle.classList.add("result-caution");
          paragraphResult.textContent = "Obtuviste más del 45% de las personas que han realizado estas pruebas.";
        } else if (media > 65) {
          mediaCircle.classList.remove("result", "result-caution");
          mediaCircle.classList.add("result-danger");
          paragraphResult.textContent = "Obtuviste un resultado superior al 65% de las personas que han realizado estas pruebas.";
        }
      } else {
        console.error("No se encontraron elementos necesarios para realizar el cálculo.");
      }
  
      event.preventDefault();
    }
  
    let continueButton = document.querySelector(".btn");
  
    if (continueButton) {
      continueButton.addEventListener("click", calculo);
    } else {
      console.error("No se encontró el botón para continuar.");
    }
  });
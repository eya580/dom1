function calculateScore() {
    console.log("La fonction calculateScore est appelée");
    let score = 0;

    // Sélectionner les boutons radio cochés dans chaque question
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    console.log("Réponse à la question 1:", q1 ? q1.value : "Non sélectionnée");
    console.log("Réponse à la question 2:", q2 ? q2.value : "Non sélectionnée");
    console.log("Réponse à la question 3:", q3 ? q3.value : "Non sélectionnée");

    // Vérifier si chaque réponse est correcte et ajouter au score
    if (q1 && parseInt(q1.value) === 1) score++;
    if (q2 && parseInt(q2.value) === 1) score++;
    if (q3 && parseInt(q3.value) === 1) score++;

    // Afficher le score
    alert("Votre score est de " + score + "/3");
}
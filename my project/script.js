document.addEventListener("DOMContentLoaded", function() {
  // Le code JavaScript à l'intérieur de cette fonction ne s'exécutera que lorsque le DOM est entièrement chargé.

  // Sélection de l'élément "myForm" et ajout d'un écouteur d'événements "submit"
  document.getElementById("myForm").addEventListener("submit", function(event){
      event.preventDefault(); // Empêche le formulaire de se soumettre normalement

      // Affichage du message de succès
      document.getElementById("successMessage").style.display = "block";

      // Réinitialisation du formulaire après quelques secondes (optionnel)
      setTimeout(function(){
          document.getElementById("myForm").reset();
          document.getElementById("successMessage").style.display = "none";
      }, 9000); // Réinitialisation du formulaire après 3 secondes (3000 millisecondes)
  });
});



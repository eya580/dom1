document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner tous les boutons "+" et "-"
    const plusButtons = document.querySelectorAll(".fa-plus-circle");
    const minusButtons = document.querySelectorAll(".fa-minus-circle");
    const deleteButtons = document.querySelectorAll(".fa-trash-alt");
    const heartButtons = document.querySelectorAll(".fa-heart");
  
    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
      var totalPrice = 0;
      const products = document.querySelectorAll(".card-body");
  
      products.forEach((product) => {
        const unitPrice = parseFloat(
          product.querySelector(".unit-price").textContent.replace("$", "")
        );
        const quantity = parseInt(
          product.querySelector(".quantity").textContent
        );
        totalPrice += (unitPrice * quantity)/2;
      });
  
      document.querySelector(".total").textContent = `${totalPrice} $`;
    }
  
    // Événement pour augmenter la quantité
    plusButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const quantityElement = this.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
      });
    });
  
    // Événement pour diminuer la quantité
    minusButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const quantityElement = this.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantity--;
          quantityElement.textContent = quantity;
          updateTotalPrice();
        }
      });
    });
  
    // Événement pour supprimer un produit
    deleteButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const product = this.closest(".card-body");
        product.remove();
        updateTotalPrice();
      });
    });
  
    // Événement pour aimer un produit (changer la couleur du cœur)
    heartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        this.classList.toggle("liked");
        // Ajoutez une classe CSS pour la couleur si le produit est aimé
        if (this.classList.contains("liked")) {
          this.style.color = "red";
        } else {
          this.style.color = "black";
        }
      });
    });
  
    // Initialiser le prix total au chargement
    updateTotalPrice();
  });
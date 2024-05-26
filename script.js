const minusBtn = document.querySelectorAll(".fa-minus-circle");
const plusBtn = document.querySelectorAll(".fa-plus-circle");
const input = document.querySelectorAll("quantity");
const total = document.getElementById("total");

// Get the data-price and convert to a number
// var price = +input.dataset.price;

// Set up event handlers that call a common function with an 
// argument that specifies what kind of operation to perform:
// minusBtn.addEventListener("click", function() { calc("subtract"); });
// plusBtn.addEventListener("click", function() { calc("add"); });
// input.addEventListener("input", calc);

plusBtn.forEach(btn =>{
   // console.log(btn)
   btn.addEventListener("click", function() {
        const quantityElement = btn.nextElementSibling;
     let quantity =  quantityElement.textContent; 
      quantityElement.textContent=++quantity 
   });
});

minusBtn.forEach(btn =>{
   // console.log(btn)
   btn.addEventListener("click", function() {
      const quantityElement = btn.previousElementSibling;
      let quantity = quantityElement.textContent;
      quantityElement.textContent=--quantity
   });
});

document.querySelectorAll('.fa-trash-alt').forEach(button=>{
   button.addEventListener('click', ()=>{
      const cardBody = button.closest('.card-body');
      cardBody.removeAttribute();
      updateTotalPrice();
   });
});


document.querySelectorAll('.fa-heart').forEach(heart=>{
   heart.addEventListener('click',()=>{
      heart.classList.toggle('liked');
   });
});




const newBackgroundColor = document.querySelector('.connect-icons');
function changeColor() {
    newBackgroundColor.style.backgroundColor = 'grey';
};
newBackgroundColor.addEventListener("mouseover", changeColor)

let btn1 = document.querySelector('.order-button')
btn1.addEventListener('click', () => {
    alert("order successful")
})

const addToCartButtons = document.querySelectorAll(".add");
      addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
          button.textContent = "Added to cart!";
        });
      });
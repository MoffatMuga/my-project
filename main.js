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

fetch("https://api.sampleapis.com/coffee/iced").then((data) =>{
      //console.log(data);
      return data.json();
}).then((completedata) => {
  //console.log(completedata);
  let data1 = "";
  completedata.map((values) =>{
    data1+= `<div class="box">
    <img src=${values.image}alt="">
    <h3 class = "title">${values.title}</h3>
    <div class="content">
        <span class="price">ksh.250</span>
        <a href="#" class="add">Add to cart</a>
        <p class = "description">${values.description}</P>
    </div>
</div>`
  })
  document.getElementById("cards").innerHTML = data1;
}).catch((err) => {
  console.log(err);
})

document.querySelector('.review-button').addEventListener('click', getPosts)

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(link.hash);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const addButtons = document.querySelectorAll(".add");

addButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const product = button.closest(".box");
    const productName = product.querySelector("h3").textContent;
    const productPrice = product.querySelector(".content span").textContent;
    console.log(`Added ${productName} to cart for ${productPrice}.`);
  });
});

const searchIcon = document.getElementById("search-icon");
searchIcon.addEventListener("click", function() {
   const searchBox = document.querySelector(".search-box");
   searchBox.classList.toggle("active");
});

/*function getReviews() {
  fetch('https://api.sampleapis.com/coffee/iced')
  .then((res) => res.json())
  .then((data) => {
    let output = <h2>reviews</h2>;
    data.forEach(function(reviews) {
      output += `
        <div>
            <h3>${value.title}</h3>
            <p>${value.description}</p>
        </div>
      `;
    }
  );
  document.getElementById('output').innerHTML=output;
});
}*/

let cartContainer = document.querySelector('.cart-container');

if(localStorage.getItem('cart') == null){
  let cart = {};
  cartContainer.innerHTML = "No";
}
else
{
  cart = JSON.parse(localStorage.getItem('cart'));
  console.log(cart)
  let carttemplate = '';
  for(let item in cart){
    console.log(cart[item])
    carttemplate += 
    `<div>
    <p>'${cart[item]}'</p>
    </div>`;
  }
  cartContainer.innerHTML = carttemplate;
}



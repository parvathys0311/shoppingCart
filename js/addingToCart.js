  if(localStorage.getItem('cart') == null){
    let cart = {};
  }
  else
  {
    cart = JSON.parse(localStorage.getItem('cart'));
  }

 let items = document.querySelectorAll('.cart')
 
 items.forEach(function (item){
    item.addEventListener('click', function(){
      const id = item.id
      if(cart[id] != undefined){
        cart[id] = cart[id] + 1;
      }
      else
      {
      cart[id] = 1;
      }
      localStorage.setItem('cart', JSON.stringify(cart));   
    });
 });

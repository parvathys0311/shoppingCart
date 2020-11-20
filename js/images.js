
const imgList = [
  { id: 1, alt: 'Item 1: New York', src: './images/item1.jpg', description: 'New York', link: 'https://i.picsum.photos/id/411/5183/2444.jpg?hmac=84Rb7FV31ExwFZ5l0fIaubSUVG9Ivrs51Tr6edx1BY8' },
  { id: 2, alt: 'Item 2 : Paris', src: './images/item2.jpg', description: 'Paris', link: 'https://i.picsum.photos/id/318/3264/2448.jpg?hmac=zkYZ29-Ww_A4O_kZ3gjlpFQuEYELWgeM6aI_CMG01BU' },
  { id: 3, alt: 'Item 3 : Indonesia', src: './images/item3.jpg', description: 'Indonesia', link: 'https://i.picsum.photos/id/323/3831/2554.jpg?hmac=ONpiXSk-ALsNy0EJyL9MxFGjaqDHmP7gU17FGgDk-Jw' },
  { id: 4, alt: 'Item 4 : Japan', src: './images/item4.jpg', description: 'Japan', link: 'https://i.picsum.photos/id/327/4442/2961.jpg?hmac=NWAIsS-aGuh9RbL1BJp8jEShGdHWf0Hf5qUaE950en0' },
  { id: 5, alt: 'Item 5 : San Fransisco', src: './images/item5.jpg', description: 'San Fransisco', link: 'https://i.picsum.photos/id/392/5580/3720.jpg?hmac=SHJx3DtQS1aAPntmf27wp2mQ5FqQHFKh7hai6wdZSrA' },
  { id: 6, alt: 'Item 6 : India ', src: './images/item6.jpg', description: 'India', link: 'https://i.picsum.photos/id/397/4475/2984.jpg?hmac=_PEWxhdxVnCU15wD6E-blJDbpMVH17QQVV0JYMZnkjc' },
] 

let imgtemplate = '';
let image = document.querySelector('.img-container');
imgList.forEach(function (item) {
  imgtemplate += 
  `<figure>
  <img src="${item.src}" alt="${item.alt}">
  <figcaption>${item.description}</figcaption>
  <button id='${item.id}' class="cart">Add to Cart</button>
  </figure>`;
});
image.innerHTML = imgtemplate;
const product = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

product.forEach(item => {
  const dec = item.querySelector('.product__quantity-control_dec');
  const inc = item.querySelector('.product__quantity-control_inc');
  const pqValue = item.querySelector('.product__quantity-value');
  const productAdd = item.querySelector('.product__add');

  inc.addEventListener('click', () => {
    pqValue.textContent = (+pqValue.textContent) + 1;
  })

  dec.addEventListener('click', () => {
    if (+pqValue.textContent > 1) {
      pqValue.textContent = (+pqValue.textContent) - 1;
    }
  })

  productAdd.addEventListener('click', () => {
    const cartProduct = cartProducts.querySelectorAll('.cart__product');
    let findIndex = -1;
    for (let i = 0; cartProduct.length; i++) {
      if (cartProduct[i].getAttribute('data-id') === item.getAttribute('data-id')) {
        findIndex = i;
        break;
      }
    }
    if (findIndex === -1) {
      let div = document.createElement('div');
      div.className = 'cart__product';
      div.dataset.id = item.getAttribute('data-id');

      let ChildImg = document.createElement('img');
      ChildImg.className = 'cart__product-image';
      ChildImg.src = item.querySelector('.product__image').src;

      let ChildDiv = document.createElement('div');
      ChildDiv.className = 'cart__product-count';
      ChildDiv.textContent = pqValue.textContent;
      

      div.appendChild(ChildImg);
      div.appendChild(ChildDiv);
      cartProducts.appendChild(div);
    } else {
      const element = cartProduct[findIndex].getElementsByClassName('cart__product-count');
      element[0].textContent = (+element[0].textContent) + (+pqValue.textContent);
    }
  })
})
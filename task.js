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
    let productInCard = cartProducts.querySelector(`[data-id="${item.getAttribute('data-id')}"]`);
    if (!productInCard) {
      cartProducts.insertAdjacentHTML('beforeend', `
      <div class='cart__product' data-id=${item.getAttribute('data-id')}>
        <img class='cart__product-image' src=${item.querySelector('.product__image').src}>
        <div class='cart__product-count'>
          ${pqValue.textContent}
        </div>
      </div>
      `);
    } else {
      const element = productInCard.getElementsByClassName('cart__product-count');
      element[0].textContent = (+element[0].textContent) + (+pqValue.textContent);
    }
  })
})
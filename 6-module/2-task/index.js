export default class ProductCard {

  constructor(product) {
    this.name = product.name;
    this.price = product.price.toFixed(2);
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;

    this.elem = document.createElement('div');
    this.render();
    this.#onBtnClick();
  }

  render() {
    this.elem.innerHTML = `
    <div class="card">
      <div class="card__top">
        <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
        <span class="card__price">€${this.price}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`;
    this.#getParent().addEventListener('click', this.#onBtnClick);
  }
  #getButton() {
    return this.elem.querySelector('.card__button');
  }
  #getParent() {
    return this.elem.querySelector('.card__top');
  }
  #onBtnClick = () => {
    const event = new CustomEvent('product-add', {
      bubbles: true,
      detail: this.id,
    });
    this.#getButton().dispatchEvent(event)
  }
}

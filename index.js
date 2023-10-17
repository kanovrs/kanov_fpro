class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }
  
  addTopping(topping) {
    this.toppings.push(topping);
  }

  // Коллораж
  calculateCalories() {
    let calories = 0;

    switch (this.size) {
      case Hamburger.SIZE_SMALL:
        calories += Hamburger.SIZES[Hamburger.SIZE_SMALL].calories;
        break;
      case Hamburger.SIZE_LARGE:
        calories += Hamburger.SIZES[Hamburger.SIZE_LARGE].calories;
        break;
      default:
        break;
    }

    switch (this.stuffing) {
      case Hamburger.STUFFING_CHEESE:
        calories += Hamburger.STUFFINGS[Hamburger.STUFFING_CHEESE].calories;
        break;
      case Hamburger.STUFFING_SALAD:
        calories += Hamburger.STUFFINGS[Hamburger.STUFFING_SALAD].calories;
        break;
      case Hamburger.STUFFING_POTATO:
        calories += Hamburger.STUFFINGS[Hamburger.STUFFING_POTATO].calories;
        break;
      default:
        break;
    }

    this.toppings.forEach((topping) => {
      calories += Hamburger.TOPPINGS[topping].calories;
    });

    return calories;
  }

  // Расчёт стоимости
  calculatePrice() {
    let price = 0;

    switch (this.size) {
      case Hamburger.SIZE_SMALL:
        price += Hamburger.SIZES[Hamburger.SIZE_SMALL].price;
        break;
      case Hamburger.SIZE_LARGE:
        price += Hamburger.SIZES[Hamburger.SIZE_LARGE].price;
        break;
      default:
        break;
    }

    switch (this.stuffing) {
      case Hamburger.STUFFING_CHEESE:
        price += Hamburger.STUFFINGS[Hamburger.STUFFING_CHEESE].price;
        break;
      case Hamburger.STUFFING_SALAD:
        price += Hamburger.STUFFINGS[Hamburger.STUFFING_SALAD].price;
        break;
      case Hamburger.STUFFING_POTATO:
        price += Hamburger.STUFFINGS[Hamburger.STUFFING_POTATO].price;
        break;
      default:
        break;
    }

    this.toppings.forEach((topping) => {
      price += Hamburger.TOPPINGS[topping].price;
    });

    return price;
  }
}

// Размеры
Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: { price: 50, calories: 20 },
  [Hamburger.SIZE_LARGE]: { price: 100, calories: 40 },
};

// Начинки
Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_POTATO = 'STUFFING_POTATO';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: { price: 10, calories: 20 },
  [Hamburger.STUFFING_SALAD]: { price: 20, calories: 5 },
  [Hamburger.STUFFING_POTATO]: { price: 15, calories: 10 },
};

// Добавки
Hamburger.TOPPING_MAYO = 'TOPPING_MAYO';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_MAYO]: { price: 20, calories: 5 },
  [Hamburger.TOPPING_SAUCE]: { price: 15, calories: 0 },
};

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log('Calories: ' + hamburger.calculateCalories());
console.log('Price: ' + hamburger.calculatePrice());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log('Price with sauce: ' + hamburger.calculatePrice());


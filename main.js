const price_block = document.getElementsByClassName('price_block'),
   prices = document.getElementsByClassName('price'),
   discounted_amount_el = document.getElementsByClassName('discounted_amount'),
   select = document.getElementById('currency'),
   data_prices = [],
   data_discount_percent = [],
   dram_white = '<img src="img/dram_white.png" class="img_white_size">',
   dram_green = '<img src="img/dram_green.png" class="img_green_size">',
   dollar_white = '<img src="img/dollar_white.png" class="img_white_size">',
   dollar_green = '<img src="img/dollar_green.png" class="img_green_size">',
   ruble_white = '<img src="img/ruble_white.png" class="img_white_size">',
   ruble_green = '<img src="img/ruble_green.png" class="img_green_size">';

let discounted_amount = [],
   updatedPrice = [],
   updated_discountable_prices = [],
   updated_discounted_amount = [],
   discountable_prices;


for (let i = 0; i < price_block.length; i++) {
   data_prices.push(price_block[i].childNodes[1].getAttribute('data-price'));
}

for (let i = 0; i < discounted_amount_el.length; i++) {
   data_discount_percent.push(discounted_amount_el[i].getAttribute('data-discount-percent'))
}

   discountable_prices = data_prices.slice(1, 4);

function discount_amount(price, percent) {
   return parseInt(price) * parseInt(percent) / 100;
}

function displayPrice(priceArr, newArr, img) {
   for (let i = 0; i < priceArr.length; i++) {
      priceArr[i].innerHTML = newArr[i] + img;
   }
}

for (let i = 0; i < discountable_prices.length; i++) {
   for (let y = 0; y < data_discount_percent.length; y++) {
      if (i === y) {
         discounted_amount.push(discount_amount(discountable_prices[i], data_discount_percent[y]))
      }
   }
}

displayPrice(prices, data_prices, dram_white);
displayPrice(discounted_amount_el, discounted_amount, dram_green);

function convertAMDToUSD(price) {
   const res = parseInt(price) / 485;
   return res.toFixed(2);
}

function convertAMDToRUB(price) {
   const res = parseInt(price) / 7;
   return res.toFixed();
}


select.addEventListener('change', function () {

   if (this.value === 'usd') {
      updatedPrice = data_prices.map((i, val) => {
         return convertAMDToUSD(data_prices[val]);
      });
      displayPrice(prices, updatedPrice, dollar_white);
      updated_discountable_prices = updatedPrice.slice(1, 4);

      discountLogic(updated_discountable_prices);
      displayPrice(discounted_amount_el, updated_discounted_amount, dollar_green);

      updated_discounted_amount = [];

   } else if (this.value === 'amd') {
      displayPrice(prices, data_prices, dram_white);
      discountLogic(discountable_prices);
      displayPrice(discounted_amount_el, updated_discounted_amount, dram_green);

      updated_discounted_amount = [];

   } else if (this.value === 'rub') {
      updatedPrice = data_prices.map((i, val) => {
         return convertAMDToRUB(data_prices[val]);
      });
      displayPrice(prices, updatedPrice, ruble_white);
      updated_discountable_prices = updatedPrice.slice(1, 4);

      discountLogic(updated_discountable_prices);
      displayPrice(discounted_amount_el, updated_discounted_amount, ruble_green);

      updated_discounted_amount = [];
   } else { return null }
});

function discountLogic(discountablePrices) {
   for (let i = 0; i < discountablePrices.length; i++) {
      for (let y = 0; y < data_discount_percent.length; y++) {
         if (i === y) {
            updated_discounted_amount.push(discount_amount(discountablePrices[i], data_discount_percent[y]));
            updated_discounted_amount.slice(1, 3)
         }
      }
   }
}

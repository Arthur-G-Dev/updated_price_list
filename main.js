const price_block = document.getElementsByClassName('price_block'),
   prices = document.getElementsByClassName('price'),
   discounted_amount_el = document.getElementsByClassName('discounted_amount'),
   select_language = document.getElementById('lang'),
   select_level = document.getElementById('level'),
   select_currency = document.getElementById('currency'),
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
   data_prices = [],
   discountable_prices;

const language_course_prices = {
   english: {
      beginner_level: [26000, 39000, 78000, 156000],
      intermediate_level: [30000, 45000, 85000, 190000],
      pro_level: [34000, 50000, 90000, 210000]
   },

   russian: {
      beginner_level: [16000, 29000, 68000, 126000],
      intermediate_level: [20000, 35000, 75000, 160000],
      pro_level: [24000, 40000, 80000, 200000]
   },

   german: {
      beginner_level: [36000, 49000, 88000, 166000],
      intermediate_level: [40000, 55000, 95000, 200000],
      pro_level: [35000, 60000, 100000, 220000]
   },
};

select_level.disabled = true;
select_currency.disabled = true;

select_language.addEventListener('change', function () {

   select_level.disabled = this.value === 'language';
   if(select_level.disabled) {
      select_level.value = 'level';
      select_currency.value = 'currency'
   }
   select_currency.disabled = this.value === 'language';
   if (this.value === 'english') {

      set_prices(price_block, language_course_prices.english.beginner_level);
      get_prices();
      get_discount_values();
      discountable_prices = data_prices.slice(1, 4);
      get_discounted_values();
      display_price(prices, data_prices, dram_white);
      display_price(discounted_amount_el, discounted_amount, dram_green);
      //empty both arrays
      data_prices = [];
      discounted_amount = [];
   } else if (this.value === 'russian') {

      set_prices(price_block, language_course_prices.russian.beginner_level);
      get_prices();
      get_discount_values();
      discountable_prices = data_prices.slice(1, 4);
      get_discounted_values();
      display_price(prices, data_prices, dram_white);
      display_price(discounted_amount_el, discounted_amount, dram_green);
      //empty both arrays
      data_prices = [];
      discounted_amount = [];

   } else if (this.value === 'german') {

      set_prices(price_block, language_course_prices.german.beginner_level);
      get_prices();
      get_discount_values();
      discountable_prices = data_prices.slice(1, 4);
      get_discounted_values();
      display_price(prices, data_prices, dram_white);
      display_price(discounted_amount_el, discounted_amount, dram_green);
      //empty both arrays
      data_prices = [];
      discounted_amount = [];
   }

});

select_level.addEventListener('change', function(){

   select_currency.disabled = this.value === 'level';
   if(this.value === 'level'){
      select_currency.value = 'currency'
   }

   if (this.value === 'beginner' && select_language.value === 'english') {

      set_prices(price_block, language_course_prices.english.beginner_level);
      get_prices();
      get_discount_values();
      discountable_prices = data_prices.slice(1, 4);
      get_discounted_values();
      display_price(prices, data_prices, dram_white);
      display_price(discounted_amount_el, discounted_amount, dram_green);
      //empty both arrays
      data_prices = [];
      discounted_amount = [];
   } else if (this.value === 'intermediate' && select_language.value === 'english') {

      set_prices(price_block, language_course_prices.english.intermediate_level);
      get_prices();
      get_discount_values();
      discountable_prices = data_prices.slice(1, 4);
      get_discounted_values();
      display_price(prices, data_prices, dram_white);
      display_price(discounted_amount_el, discounted_amount, dram_green);
      //empty both arrays
      data_prices = [];
      discounted_amount = [];
   } else if (this.value === 'pro' && select_language.value === 'english') {

      set_prices(price_block, language_course_prices.english.pro_level);
      get_prices();
      get_discount_values();
      discountable_prices = data_prices.slice(1, 4);
      get_discounted_values();
      display_price(prices, data_prices, dram_white);
      display_price(discounted_amount_el, discounted_amount, dram_green);
      //empty both arrays
      data_prices = [];
      discounted_amount = [];

   } else if (this.value === 'beginner' && select_language.value === 'russian') {

      set_prices(price_block, language_course_prices.russian.beginner_level);
      get_prices();
      get_discount_values();
      discountable_prices = data_prices.slice(1, 4);
      get_discounted_values();
      display_price(prices, data_prices, dram_white);
      display_price(discounted_amount_el, discounted_amount, dram_green);
      //empty both arrays
      data_prices = [];
      discounted_amount = [];
   } else if (this.value === 'intermediate' && select_language.value === 'russian') {

      set_prices(price_block, language_course_prices.russian.intermediate_level);
      get_prices();
      get_discount_values();
      discountable_prices = data_prices.slice(1, 4);
      get_discounted_values();
      display_price(prices, data_prices, dram_white);
      display_price(discounted_amount_el, discounted_amount, dram_green);
      //empty both arrays
      data_prices = [];
      discounted_amount = [];
   } else if (this.value === 'pro' && select_language.value === 'russian') {

      set_prices(price_block, language_course_prices.russian.pro_level);
      get_prices();
      get_discount_values();
      discountable_prices = data_prices.slice(1, 4);
      get_discounted_values();
      display_price(prices, data_prices, dram_white);
      display_price(discounted_amount_el, discounted_amount, dram_green);
      //empty both arrays
      data_prices = [];
      discounted_amount = [];
   } else if (this.value === 'beginner' && select_language.value === 'german') {

      set_prices(price_block, language_course_prices.german.beginner_level);
      get_prices();
      get_discount_values();
      discountable_prices = data_prices.slice(1, 4);
      get_discounted_values();
      display_price(prices, data_prices, dram_white);
      display_price(discounted_amount_el, discounted_amount, dram_green);
      //empty both arrays
      data_prices = [];
      discounted_amount = [];
   } else if (this.value === 'intermediate' && select_language.value === 'german') {

      set_prices(price_block, language_course_prices.german.intermediate_level);
      get_prices();
      get_discount_values();
      discountable_prices = data_prices.slice(1, 4);
      get_discounted_values();
      display_price(prices, data_prices, dram_white);
      display_price(discounted_amount_el, discounted_amount, dram_green);
      //empty both arrays
      data_prices = [];
      discounted_amount = [];
   } else if (this.value === 'pro' && select_language.value === 'german') {

      set_prices(price_block, language_course_prices.german.pro_level);
      get_prices();
      get_discount_values();
      discountable_prices = data_prices.slice(1, 4);
      get_discounted_values();
      display_price(prices, data_prices, dram_white);
      display_price(discounted_amount_el, discounted_amount, dram_green);
      //empty both arrays
      data_prices = [];
      discounted_amount = [];
   }
});


// setting prices due to language lesson value
function set_prices(price_block, price_arr){
   for (let i = 0; i < price_block.length; i++) {
      price_block[i].childNodes[1].setAttribute('data-price', price_arr[i])
   }
}

// getting prices from 'data-price' attributes
function get_prices() {
   for (let i = 0; i < price_block.length; i++) {
      data_prices.push(price_block[i].childNodes[1].getAttribute('data-price'));
   }
}

//getting discount values from 'data-discount-percent'
function get_discount_values(){
   for (let i = 0; i < discounted_amount_el.length; i++) {
      data_discount_percent.push(discounted_amount_el[i].getAttribute('data-discount-percent'))
   }
}

// getting discount amount
function discount_amount(price, percent) {
   return parseInt(price) * parseInt(percent) / 100;
}

//  main price and discounted price displaying function
function display_price(priceArr, newArr, img) {
   for (let i = 0; i < priceArr.length; i++) {
      priceArr[i].innerHTML = newArr[i] + img;
   }
}

// getting each  discounted value
function get_discounted_values () {
   for (let i = 0; i < discountable_prices.length; i++) {
      for (let y = 0; y < data_discount_percent.length; y++) {
         if (i === y) {
            discounted_amount.push(discount_amount(discountable_prices[i], data_discount_percent[y]))
         }
      }
   }
}

// converting AMD to USD
function convertAMDToUSD(price) {
   const res = parseInt(price) / 485;
   return res.toFixed(2);
}
// convertig AMT to RUB
function convertAMDToRUB(price) {
   const res = parseInt(price) / 7;
   return res.toFixed();
}

get_prices();
get_discount_values();
discountable_prices = data_prices.slice(1, 4);
get_discounted_values();
display_price(prices, data_prices, dram_white);
display_price(discounted_amount_el, discounted_amount, dram_green);

data_prices = [];
discounted_amount = [];




select_currency.addEventListener('change', function () {

   if (this.value === 'usd') {
      get_prices();
      updatedPrice = data_prices.map((i, val) => {
         return convertAMDToUSD(data_prices[val]);
      });
      console.log(updatedPrice);
      display_price(prices, updatedPrice, dollar_white);
      updated_discountable_prices = updatedPrice.slice(1, 4);

      discountLogic(updated_discountable_prices);
      display_price(discounted_amount_el, updated_discounted_amount, dollar_green);

      updated_discounted_amount = [];

   } else if (this.value === 'amd') {
      get_prices();
      display_price(prices, data_prices, dram_white);
      discountLogic(discountable_prices);
      display_price(discounted_amount_el, updated_discounted_amount, dram_green);

      updated_discounted_amount = [];

   } else if (this.value === 'rub') {
      get_prices();
      updatedPrice = data_prices.map((i, val) => {
         return convertAMDToRUB(data_prices[val]);
      });
      display_price(prices, updatedPrice, ruble_white);
      updated_discountable_prices = updatedPrice.slice(1, 4);

      discountLogic(updated_discountable_prices);
      display_price(discounted_amount_el, updated_discounted_amount, ruble_green);

      updated_discounted_amount = [];
   } else {
      return null
   }
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

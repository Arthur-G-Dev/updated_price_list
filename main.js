const price_block = document.getElementsByClassName('price_block');
const data_prices = [];
const data_discount_percent = [];
const prices = document.getElementsByClassName('price');
const discounted_amount_el = document.getElementsByClassName('discounted_amount');
const img1 = '<img src="img/dram_white.png">';
const img2 = '<img src="img/dram_green.png">';
let discounted_amount = [];

for (let i = 0; i < price_block.length; i++) {
    data_prices.push(price_block[i].childNodes[1].getAttribute('data-price'));
}

for (let i = 0; i < discounted_amount_el.length; i++) {
    data_discount_percent.push(discounted_amount_el[i].getAttribute('data-discount-percent'))
}

let discountable_prices = data_prices.slice(1, 4);

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

displayPrice(prices, data_prices, img1);
displayPrice(discounted_amount_el, discounted_amount, img2);

function convertAMDToUSD(price) {
    const res = parseInt(price) / 485;
    return res.toFixed(2);
}

function convertAMDToRUB(price) {
    const res = parseInt(price) / 7;
    return res.toFixed();
}

const select = document.getElementById('currency');
let updatedPrice = [];


let updated_discountable_prices = [];
let updated_discounted_amount;
select.addEventListener('change', function () {

    if (this.value === 'usd') {
        updatedPrice = data_prices.map((i, val) => {
            return convertAMDToUSD(data_prices[val]);
        });
        displayPrice(prices, updatedPrice, img1);
        updated_discountable_prices = updatedPrice.slice(1, 4);
        console.log(updated_discountable_prices)
        discountLogic(updated_discountable_prices);
        displayPrice(discounted_amount_el, discounted_amount, img2);
        discounted_amount = [];
    } else if (this.value === 'amd') {
        displayPrice(prices, data_prices, img1);
        discountLogic(discountable_prices);
        displayPrice(discounted_amount_el, discounted_amount, img2);
        discounted_amount = [];
    } else if (this.value === 'rub') {
        updatedPrice = data_prices.map((i, val) => {
            return convertAMDToRUB(data_prices[val]);
        });
        displayPrice(prices, updatedPrice, img1);
        updated_discountable_prices = updatedPrice.slice(1, 4);
        console.log(updated_discountable_prices)
        discountLogic(updated_discountable_prices);
        console.log(discounted_amount)
        displayPrice(discounted_amount_el, discounted_amount, img2);
        discounted_amount = []
    } else {
        return null
    }
});

function discountLogic(discountablePrices) {
    for (let i = 0; i < discountablePrices.length; i++) {
        for (let y = 0; y < data_discount_percent.length; y++) {
            if (i === y) {
                discounted_amount.push(discount_amount(discountablePrices[i], data_discount_percent[y]));
                discounted_amount.slice(1, 3)
            }
        }
    }
}

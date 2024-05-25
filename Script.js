let goods = [
    {id: 1, title: 'Микроволновка', price: 1500, count: 4},
    {id: 2, title: 'Телевизор', price: 2500, count: 1},
    {id: 3, title: 'Тумба', price: 5500, count: 5},
    {id: 4, title: 'Холодильник', price: 200, count: 2},
    {id: 5, title: 'Стол', price: 5600, count: 5},
    {id: 6, title: 'Телефон', price: 1900, count: 12},
    {id: 7, title: 'Компьютер', price: 4200, count: 11},
    {id: 8, title: 'Мангал', price: 250, count: 7},
    {id: 9, title: 'Люстра', price: 300, count: 3},
 ]

 // Используя этот массив, необходимо решить ряд задач:

 // 1) Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID

let evenId = goods.filter(item => item.id % 2 === 0);

console.log(evenId);
//-------------------

// 2) Отфильтруйте продукты с количеством менее 5 единиц

let countQuantity = goods.filter(item => item.count < 5);
console.log(countQuantity);
//-------------------

// 3) Найдите значение элемента массива (продукта), цена которого будет кратна 5

let priceMultiple = goods.find(item => item.price % 5 === 0);
console.log(priceMultiple); // 1 elem
 //               ||    
let pricesMultiple = goods.filter(item => item.price % 5 === 0);
console.log(pricesMultiple); // all elems
//-------------------

// 4) Найдите индекс элемента, count которого будет больше 11

let indexCount = goods.findIndex(item => item.count > 11);
console.log(indexCount); 
//-------------------

//5) Посчитайте количество элементов, count которых является нечетным числом

let CountGoods = goods.filter(item => item.count % 2 !== 0);

let CountGoodsLength = CountGoods.length;

console.log(CountGoodsLength);
//-------------------

// 6) Посчитайте количество элементов, имя которых начинается на “Т”

let CountGoods2 = goods.filter(item => item.title.startsWith('Т'));

let CountGoodsLength2 = CountGoods2.length;

console.log(CountGoodsLength2)
//-------------------

// 7) Проверьте, есть ли хотя бы один продукт с ценой выше 500

let check = goods.some(item => item.price > 500);

console.log(check)
//-------------------

// 8) Создайте новый массив, элементы которого будут хранить значение цен всех товаров с 35-процентной скидкой (только цены)

let discountedPrices = goods.map(item => item.price * 0.65);

console.log(discountedPrices);
//-------------------

// 9) Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов (учитывая другие  сво-ва)

let newGoods = goods.map(item => ({
    ...item,
    count: 0
}));

console.log(newGoods);
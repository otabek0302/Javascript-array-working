//1. Отфильтровать массив машин закинуть в переменную cheap только те машины у которых цена меньше 7 тысяч

// let data = {
//      cars: [
//           {
//                type: "BMW",
//                price: 5000,
//                model: "M5 Pro"
//           },
//           {
//                type: "Audi",
//                price: 7000,
//                model: "Ix Pro"
//           },
//           {
//                type: "Chevrolet",
//                price: 1000,
//                model: "Lasseti"
//           },
//           {
//                type: "Tesla",
//                price: 9000,
//                model: "Y Model"
//           },
//           {
//                type: "Ferrari",
//                price: 15000,
//                model: "Mustang"
//           },
//           {
//                type: "Chevrolet",
//                price: 200,
//                model: "Tiko"
//           },
//      ]
// }
// var cheapCars = data.cars.filter(function (value) {
//      return value.price > 7000;
// });

// console.log(
//      cheapCars.forEach(car => {
//           for (let key in car) {
//                console.log(`${key}: ${car[key]}`)
//           }
//      })
// )

//------------------------------------------------------------------------------------------------------------------------------------
// * В переменной индекс я пишу любое число
// функция должна сравнить это число с индексом элементов из arr,
// Если какой ни будь из них совпадает то удалить этот элемент из массива
// Если нет то сообщить что такого элемента у нас нет *

// let index = +prompt()
// let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']

// if (arr.includes(String(index))) {
//      var carIndex = arr.indexOf(index);
//      arr.splice(carIndex, 1);
//      alert(`You delete the ${carIndex}`)
//      for (let item of arr) {
//           console.log(item);
//      }
// } else {
//      console.log(`There is no user by name ${carIndex}`);
// }


// if (index > -1) {
//      arr.splice(index, 1);
//      // alert(`You delete the ${index}`)
//      for (let item of arr) {
//           console.log(item);
//      }
//      console.log(arr)
// } else {
//      console.log(`There is no user by name ${index}`);
// }


//------------------------------------------------------------------------------------------------------------------------------------
document.getElementById('demo').innerHTML ='Если массив включает в себя больше 5-ти элемента типа `number` то показать в консоли гуд '

let arr = [1, 2, false, 'salom', 24, 'dunyo', 'aniqlanmagan', null, 'xato', 22]

var numbers = arr.join(",").split(",").filter(Number);

console.log(typeof numbers.length)

if (numbers.length > 2) {
     console.log('Good')
} else {
     console.log('Bad');
}



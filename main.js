//N1
// const numbers = [1, 2, 3, 4, 5, 6];
// const num2 = []
// numbers.forEach(item => {
//     if(item%2 === 0) {
//         num2.push(item)
//     }
// })
// console.log(num2);

//N2
// const strings = ["apple", "banana", "cherry", "date"];
// const isMore = [];
// strings.forEach((item) => {
//   if (item.length > 5) {
//     isMore.push(item);
//   }
// });
// console.log(isMore);

// N3
// const numbers = [1, 2, 3, 2, 4, 1, 5];
// const notRepeated = [];
// numbers.forEach((item) => {
//   let unique = true;
//   notRepeated.forEach((nItem) => {
//     if(item === nItem) {
//         unique = false
//     }
//   });
//   if(unique) {
//     notRepeated.push(item)
//   }
// });
// console.log(notRepeated);

// N4
// const numbers = [-5, 3, -2, 8, 0, -1, 7];
// const minus = []
// const plus = []
// numbers.forEach((item) => {
//     if(item < 0) {
//         minus.push(item)
//     }
//     else{
//         plus.push(item)
//     }
// })
// console.log(minus);
// console.log(plus);

//N5
// let strings = ["hello", "world1", "test", "abc123", "example"];
// const noNumbers = []
// strings.forEach((item) => {
//     let isNum = false
//     if(/\d/.test(item) == true){
//         isNum = true
//     }
//     if(isNum == false) {
//         noNumbers.push(item)
//     }
// })
// console.log(noNumbers);

// N6
// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie" },
//   { name: "Dave", age: 22 },
// ];
// const youngUsers = [];
// users.forEach((item) => {
//   if (item.age > 20 && item.age < 30) {
//     youngUsers.push(item);
//   }
// });
// console.log(youngUsers);

// N7
// let words = ["one", "two", "three", "four", "five"];
// const evenWords = [];
// words.forEach((item) => {
//   if (item.length % 2 != 0) {
//     evenWords.push(item);
//   }
// });
// console.log(evenWords);

//N8
// let numbers = [4, 12, 7, 19, 3, 10];
// const lessThen = [];
// const biggerThen = [];
// numbers.forEach((item) => {
//   if (item < 10) {
//     lessThen.push(item);
//   }
//   else {
//     biggerThen.push(item)
//   }
// });
// console.log(lessThen);
// console.log(biggerThen);

// N9(8)
// let movies = [
//   { title: "Movie 1", rating: 6.5 },
//   { title: "Movie 2", rating: 8.3 },
//   { title: "Movie 3", rating: 7.2 },
//   { title: "Movie 4", rating: 5.8 },
// ];
// const high = [];
// movies.forEach((item) => {
//   if (item.rating > 7) {
//     high.push(item);
//   }
// });
// console.log(high);
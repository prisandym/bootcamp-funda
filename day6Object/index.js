// OBJECT
// --> dipanggil dg label = properti
// properti yang disimpan dalam object biasanya berkaitan
// syntax:
// contoh:
// {
//     nama : "Michael"
//     username : "mike90"
//     email : "mike@gmail.com"
//     password : "strong99"
// }

//OBJECT LATERAL
// const person1= {
//     fullName: 'rio',
//     nationality: 'indonesia',
//     age: 25,
//     // array
//     hobbies: ['fishing','cooking'],
//     sentence: () => {
//         console.log('running');
//     },
//     account: {
//         username: 'prisandym',
//         password: 'stronger',
//     },
    // sentence() {
    //     console.log('running');
    // },
    // sentence: function () {
    //     console.log('running');
    // },
// };
// console.log(person1.fullName)

// const person1= {
//     fullName: 'rio',
//     nationality: 'indonesia',
//     age: 25,
//     // array
//     hobbies: ['fishing','cooking'],
//     sentence: () => {
//         console.log('running');
//     },
//     account: {
//         username: 'prisandym',
//         password: 'stronger',
//     },
    // sentence() {
    //     console.log('running');
    // },
    // sentence: function () {
    //     console.log('running');
    // },
// };

// CARA MEMANGGIL
// console.log(person1);
// console.log(person1.fullName);
// console.log(person1.account.username);
// console.log(person1.sentence()); ==> undefined karena gada return
// console.log('cara kedua', person1['fullName']);
// console.log(person1.hobbies[0]);
// console.log(person1['hobbies'][0]);

// let prop = 'hobbies';
// console.log(person1[prop]); //-> lihat dulu ke var, isinya apa
// console.log(person1.prop) // ga liat ke var, langsung propo jadi undefined

// GANTI/TAMBAH PROPOERTI
// cara pertama
// person1.fullName= 'josh';
// person1.dominantFoot ='right';
// dominantFoot akan menjadu props baru karena property dominantFoot belum ada

// cara kedua dengan spread operator
// person1+ { ...person1,fullName:'josh', dominantFoot: 'right'};
// console.log(person1.fullName)
// console.log(person1)

// let manusia2 = new Object();
// let manusia2 = ();

// manusia2.fullName = 'pele',
// manusia.dominantFoot = 'left',

// let person1 = {
//     fullName: 'rio',
//     nationality: 'indonesia',
//     age: 25,
//     retired() {
//         return this.age * 2;
//     },
//     // array
//     hobbies: ['fishing','cooking'],
//     sentence: () => {
//         console.log('running');
//     },
//     account: {
//         username: 'prisandym',
//         password: 'stronger',
//     }
// };

// console.log(person1.retired())

// let categories = ["cepat saji", "pakaian", "elektronik", "buah"];
// let product ={
//   name: "noodle",
//   price: 20000,
//   stock: 10,
//   categoryId: 0,
// }
// let cepatSaji1 = {
//   name: "noodle",
//   price: 20000,
//   stock: 10,
//   categoryId: 0,
//   expired: 2020,
// };
// let pakaian1 = {
//   name: "baju",
//   price: 20000,
//   stock: 10,
//   categoryId: 0,
//   size: "xl",
// };

//CLASS --> PEMBUAT OBJECT, digunakan untuk menghasilkan objek yg banyak
// class Manusia{
//     constructor(name,birthDate,nationality){
//         this.name = name;
//         this.birthDate = birthDate;
//         this.nationality = nationality;
//     }
//     suaraLahir = () => {
//         console.log('nangis')
//     };
// }
// // cara manggil class pake new
// let manusia1 = new Manusia("pele", "1950-07-31", "Brazil");
// let manusia2 = new Manusia("romarion", "1951-07-01", "Brazil");

// class FootBallPlayer extends Manusia {
//   constructor(name, birthDate, nationality, dominantFoot) {
//     super(name, birthDate, nationality);
//     this.dominantFoot = dominantFoot;
//   }

//   shooting = () => {
//     console.log("goalll");
//   };
// }

// class Artist extends Manusia {
//   constructor(name, birthDate, nationality, artistType) {
//     super(name, birthDate, nationality);
//     this.artistType = artistType;
//   }

//   work = () => {
//     console.log("ada aja");
//   };
// }
// let FootBallPlayer1 = new FootBallPlayer(
//   "pele",
//   "1950-07-31",
//   "Brazil",
//   "left"
// );
// let penyanyi = new Artist("isyana", "1990-05-21", "indonesia", "singer");
// console.log(FootBallPlayer1);
// console.log(penyanyi);

// manusia1.suaraLahir();
// console.log(manusia1);

// console.log(manusia2);

//EXERCISE
let today = new  Date();
let month = today.getMonth()
let year = today.getFullYear()
let day = today.getDay()
let date = today.getDate()
let hour = today.getHours()
let minute = today.getMinutes()
let second= today.getSeconds()

let days= ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
let months= ['january',
'february',
'march',
'april',
'may',
'june',
'july',
'august',
'september',
'october',
'november',
'december'
];

console.log(today)
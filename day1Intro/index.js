// DAY 1

// var gunanya untuk initialisasi, disimpan dalam RAM 
// var nama = "rio";
// console.log(nama);
// nama = "dino"; 
// console.log(nama);

// angka
// var usia = 2.5;
// console.log(usia);

// boolean (bisa true/ false)
// var isLecturer = true
// console.log(isLecturer)
// var tipe = typeof(isLecturer)
// console.log('line 15', tipe)
// console.log('line 16', typeof (tipe))

// var angka1 = 5
// var angka2 = 7
// var hasil =angka1*angka2
// console.log(hasil)

// var murid1 = 'dika'
// var murid2 = 'doni'
// console.log(murid1+ murid2)
// console.log(murid1+' '+murid2)
// console.log(`${murid1} ${murid2}`)

// console.log('11'+1)
// console.log('11'-2)

// console.log(56%53)

// var angka1 = 5
// tambah 1
// angka1++
// angka1 = angka1+1
// angka1+=10
// sama dengan  
// angka1 = angka1+10
// console.log(angka1)

// console.log(Math.round(5.71))
// var numb = '112.02'
// var numb2= 112
// console.log(parseInt(numb))
// console.log(Number(numb))
// console.log(numb2)

// var x='Hello Worlds'
// console.log(x.slice(5,8))
// console.log(x.split(' '))

// let tes1 = 3
// let tes = !(tes1 > 3)
// let tes = tes1 > 3 
// let tes = tes1 === 3 // === type data harus sama
// let tes = tes1 == 3 // == type data boleh beda
// ! itu pembalik misal dari true -> false , false-> true
 
// and operator && 
// let tes = false && false && false

// or operator ||
// let tes = true || false || false
let tes = true && !false || false


console.log(tes)
var x=4
var y=3
var z=2
var w=((x+y*z)/(x*y))**z
// console.log(w)

// console.log(Math.cbrt(8))

let hari =485
let tahun = Math.floor(hari/360)
hari %=360
let bulan = Math.floor(hari/30)
hari %=30

// console.log(`${tahun} tahun, ${bulan} bulan, ${hari} hari`)
// console.log(tahun+" tahun, "+ bulan+ "bulan,"+ hari+ "hari")

let tes = !(2>3) && (100>1)
console.log(tes)
// WHILE
// ini infinite looping karena tidak ada jalan keluar
// while (true){
//     console.log('line 4')
// }

// kondisi 1
// let angka = 1
// while(angka <=5){
//     angka++
//     console.log('count- '+angka)
// }
// kondisi 2
// let angka = 1
// while(angka <=5){ // bisa <6
//     console.log('count- '+angka)
//     angka++
// }

// let angka = 1
// while(angka <=5){ // bisa <6
//     console.log('count- '+angka) // + agar keduanya jadi string
//     angka++
// }
// console.log('terakhir', angka) // , jika CL 2 tipe data

// let angka = 1
// while(!(angka <0)){ //jadi tak terbatas
//     console.log('count- '+angka)
//     angka++
// }
// console.log('terakhir', angka)

// let angka = 1
// while(angka <0){ // false -> ga jalan
//     console.log('count- '+angka)
//     angka++
// }
// console.log('terakhir', angka)


// DO WHILE
// kerjakaan duku baru dicek kondisis
// let angka = 1
// do{
//     console.log(angka)
// } while(false)

// let angka = 1
// do{
//     console.log(angka)
//     angka++
// } while(angka <5)

// alur initialisasi variable let numb , jika kondisi numb kurang dari sama dengan 5 menghasilkan
// true maka koding yang ada didalam kurawal pasti dijalankan, setelah selasai dijalankan 
// maka variable numb akan ditambah 1 (karena ++) , lalu di cek kembali apakah kondisinya true/false,
// jika ulangi lagi
// for (let numb =1; numb <=5; numb++){
//     console.log('count- '+numb)
// }
// for (let numb =5; numb >0; numb--){
//     console.log('count- '+numb)
// }
// for (let numb =-5; numb <0; numb++){
//     console.log('count- '+Math.abs(numb))
// }  

//BREAK
    
// let angka = 0
// while(true){
//     if(angka >3){
//         break
//     }
//     console.log(angka)
//     angka++
// }

// let angka = 0
// while(true){
//     if(angka >3){
//         break
//     }
//     angka++
// }
// console.log(angka)

// CONTINUE
let angka = 0
// while(angka<5){
//     if(angka ===3){
//         angka++
//         continue
//     }
//     console.log(angka)
// }

// for (let i = 0; i < 5; i++) {
//     if(i == 3){
//         continue
//     }
//     console.log(i)
// }

// bintang horizontal
// tanpa looping
// let output= ''
// output+= '*'
// output+= '*'
// output+= '*'
// output+= '*'
// output+= '*'
// console.log(output)
//dengan looping
// let output= ''
// for(let i=0; i<5; i++){
//     output+= '*'
// }
// console.log('==============')
// console.log(output)

// bintang vertikal
// tanpa looping
// let output= ''
// output+= '*\n'
// output+= '*\n'
// output+= '*\n'
// output+= '*\n'
// output+= '*\n'
// console.log(output)
// dengan looping
// let output= ''
// for(let i=0; i<5; i++){
//     output+= '*\n'
// }
// console.log('==============')
// console.log(output)

// persegi
// tanpa looping
// let output= ''
// console.log('*****\n*****\n*****\n*****\n*****\n')
// dengan looping
// let output= ''
// for(let i = 0;i<5;i++){
//     for (let j = 0; j < 5; j++) {
//         output+='*'
//     }
//     output+='\n'
// }
// console.log(output)


// segitiga alas bawah
// console.log('*\n**\n***\n****\n*****\n')

// console.log('===================')

// let output=''

// for(let i = 0;i<5;i++){
//     for (let j = 0; j <= i; j++) {
//         output+='*'
//     }
//     output+='\n'
// }
// console.log(output)

// tanpa looping
// output+='*' i =0 j=0
// output+='\n'i=0
// output+='*' i=1 j=0
// output+='*' i =1 j=1
// output+='\n'
// output+='*' i= 2 j=0
// output+='*'      j=1
// output+='*'  i=2   j=2
// output+='\n'
// output+='*' i=3
// output+='*'
// output+='*'
// output+='*'
// output+='\n'
// output+='*' i=4
// output+='*'
// output+='*'
// output+='*'
// output+='*'
// output+='\n'



// console.log(output)


// EXERCISE 1 segitiga alas atas
// let output=''

// for(let i = 0;i<5;i++){
//     for (let j = 5; j >i; j--) {
//         output+='*'
//     }
//     if(i<)
//     output+='\n'
// }
// console.log(output)
// pembahasan

// segitiga alas atas reverse (+spasi)
// let tinggi = 10
// let output=''

// for(let i = 0;i<tinggi;i++){
//     for (let j = i; j <tinggi; j++) {
//         output+=' '
//     }
//     for (let k = 0; k <= i; k++) {
//         output+='*'
//     }
//     if(i<tinggi -1)
//     output+='\n'
// }
// console.log(output)

// 2 segitiga kosong
// let output=''

// for(let i = 0;i<5;i++){
//     for (let j = 5; j >i; j--) {
//         output+='*'
//     }
//     output+='\n'
// }
// for(let i = 1;i<5;i++){
//     for (let j = 0; j <= i; j++) {
//         output+='*'
//     }
//     output+='\n'
// }
// console.log(output)

// let output=''

// for(let i = 0;i<10;i++){
//     for (let j = 0; j <= i; j++) {
//         output+='    *    '
//     }
//     output+='\n'
// }
// console.log(output)
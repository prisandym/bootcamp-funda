//SYNTAX ARRAY = U/ MENYIMPAN DATA SATU/ LEBIH DI DALAM
//SEBUAH VARIABLE   
//TIAP DATA DI DALAM ARRAY DIKASIH LABEL DISEBUT INDEX
//INDEX PASTI DIMULAI DARI 0,1,2 dst
//tiap value dibatasin dg "koma" / ","
// let things = ['buku','pena','pensil']

// console.log(things)
// console.log(things[0])
// console.log(things[1])
// console.log(things[2])

// let things = [,'pensil',]

// console.log(things)
// console.log(things[0])
// console.log(things[1])
// console.log(things[2])

// //ingin ganti salah satu isi array
// let things = ['buku','pena','pensil']
// things[0] = "laptop"
// console.log(things)
// console.log(things[0])
// console.log(things[1])
// console.log(things[2])

//ingin tambah array
// let things = ['buku','pena','pensil']
// things[3] = 'napkin'
// console.log(things)
// console.log(things[0])
// console.log(things[1])
// console.log(things[2])

// // length = hitung jumlah index/datas
// console.log(things.length)
// console.log(things[1].length)

//tambahn index di akhir pake push, kalo index diawal pake unshift
// let things = ['buku','pena','pensil']
// things.unshift('jacket')
// things.push('jacket')
// console.log(things)

// things[3] = 'jacket'
// console.log(things)
//push dan codingan dibawah sama saja
// things[things.length] = 'jacket'
// console.log(things)

//hapus index di akhir pake pop, kalo index awal pake shift
// let things = ['buku','pena','pensil']
// let data =things.pop()
// console.log(data)
// console.log(things)

//splice bisa u/ edit, tamnbah, hapus di index mana aja
//splice(startIndex, berapaYangMauDihapus,dataYang)
//ini contoh untuk menambahkan ditengah
// things.splice(2,0,'kacamata','penggaris')
// let things = ['buku','pena','pensil','buku']
// things.splice(2,0,'kacamata','penggaris')
// console.log(things)
//contoh hapus tengah
// let things = ['buku','pena','pensil','baju']
// things.splice(1,2)
// console.log(things)

//SLICE = memotong data (startIndex, endIndex)
// let things = ['buku','pena','pensil','baju']
// let newThings = things.slice(1,3)
// console.log(newThings)
// let things = ['buku','pena','pensil','baju']
// let newThings = things.slice(1)
// console.log(newThings)

//SORT OF = MEMNGURUTKAN
// let things = ['buku','pena','pensil','baju']
// let tes =things.sort(things)
// console.log(tes)


//JOIN
// join menggabungkan array of strings menjadi string
// jika type data didalam tidak ada strign maka akan tetap diubah 
// menjadi string 
// let days = ['sunday',"monday",'tuesday','wednesday']
// let days = ['sunday',1,'tuesday','wednesday']
// let days = [1,1,1,1]

// let newDays=days.join(' ')
// console.log(newDays)

//CONCAT = menggabungkan lebih dari variable
// let things = ['baju','celana']
// let fruits = ['pisang','jeruk']
// let animals = ['kucing','anjing']

// let two = things.concat(fruits)
// let three = things.concat(fruits,animals)
// // pake cara spread operator
// things = [...things,'tes']
// let three = [...things,...animals,...fruits]
// console.log(three)

// let kata = 'laptop'
// let tes=kata.split('')

// console.log(tes)
// tes = tes.join('')
// console.log(tes)


//EXERCISE
// let angka= 23567
// angka=angka.toString()
// angka=angka.split('').reverse().join('')
// angka = parseInt(angka)
// console.log(angka)

//ARRAY 2 DIMENSI 
// let things = [
//     ['red pen','blue pen'],
//     ['analog clock','digi clock'],
//     ['futsal shoes','badminton shoes']
// ]
// console.log(things[1][1])

// let angka =[[1,2],[1,[56,90],[100,123]],1,[57,23]]

// console.log(angka[1][2][1])

//LOOPING WITH ARRAY

// let categoris = ['horror','romcom','action','drama','thriller']
// let output = 'list categoris film :\n'
// for(let i=0;i<categoris.length;i++){
//     output+=`${i+1}. ${categoris[i]}\n`;
// }
// console.log(output)


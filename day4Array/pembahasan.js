//EXERCISE
//reverse angka tanpa reverse
// let angka = [1,2,3,4,5,6]
// let newAngka = []
//algoritna tanpa looping
// newAngka.push(angka[5])
// newAngka.push(angka[4])
// newAngka.push(angka[3])
// newAngka.push(angka[2])
// newAngka.push(angka[1])
// newAngka.push(angka[0])
//dengan looping
// for(let i=angka.length-1;i>=0;i--){
//     newAngka.push(angka[i])
// }
// angka=newAngka
// console.log(angka)

//EXERCIE 2
let kata = 'andikaa'
let jumlahVocal = 0
// cek tiap huruf  apakah vocal atau bukan 
kata = kata.split('')
for (let i = 0; i < kata.length; i++) {
    const element = kata[i];
    // if(element =='a'||element == 'u'||element == 'i'|| element == 'o'|| element == 'e'){
    //     jumlahVocal++
    // }
    // if(['a','i','u','e','o'].includes(element)){
    //     jumlahVocal++
    // }
    if('aiueo'.split('').includes(element)){
        jumlahVocal++
    }
}



console.log(jumlahVocal) // 3
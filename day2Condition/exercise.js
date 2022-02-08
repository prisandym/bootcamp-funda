// IMT
// BB Kurang= <18.5 nilai >=0 && nilai <18.5
// BB Ideal= 18.5 - 24.9 nilai >=18.5 && nilai <25
// BB Lebih= 25.0 - 29.9 nilai >=25.0 && nilai <30
// BB Sangat Berlebih= 30.0 - 39.9 nilai >=30.0 && nilai <40
// BB Obesitas= >39.9 nilai >=40

let berat = 67
let tinggi = 1.78
let IMT = berat/(tinggi**2)
let kondisi
if(IMT <18.5){
    kondisi = 'Kurang'
}else if(IMT >=18.5 && IMT <25){
    kondisi ='Ideal'
}else if(IMT >=25.0 && IMT <30){
    kondisi ='Lebih'
}else if(IMT >=30.0 && IMT <40){
    kondisi ='Sangat Berlebih'
}else{
    kondisi ='Obesitas'
}
console.log(`berat badan ${berat} kg, dan tinggi ${tinggi} m, kondisinya adalah ${kondisi}`)
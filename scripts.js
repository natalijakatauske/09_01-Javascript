console.log('labas')

//1.H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas
//atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.

// const myName = document.querySelector('h1')
// myName.addEventListener('click', () => {
//     myName.style.color = 'red'
//     myName.style.textAlign = 'center'
//     myName.style.fontSize = '50px'
// })


//2.Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas
//position: absolute ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko,
//jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę.
//Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.

// const buttonHtml = document.querySelector('button')
// buttonHtml.style.cssText = 'possition:absolute; top:0; left:0'

// let originalPosition = true
// function changePosition () {
//     buttonHtml.style.cssText = originalPosition ? 'position:absolute; bottom:0; right:0' : 'position:absolute; top:0; left:0'
//     originalPosition = !originalPosition
// }

// buttonHtml.addEventListener('click', changePosition)


//3.Pakoreguokite antrą pratimą, kad mygtukas suktųsi ratu - laikrodžio rodykle.

// const buttonHtml = document.querySelector('button')
// buttonHtml.style.cssText = 'possition:absolute; top:0; left:0'

// let corner = 0
// const cornerStyle = ['position:absolute; top:0; right:0', 'position:absolute; bottom:0; right:0', 'position:absolute; bottom:0; left:0', 'position:absolute; top:0; left:0']
// function changePosition (event) {
//     if (corner < cornerStyle.length) {
//         buttonHtml.style.cssText = cornerStyle[corner]
//         corner++
//     } if (corner === cornerStyle.length) {
//         corner = 0
//     }
// }

// buttonHtml.addEventListener('click', changePosition)


//4.Sukurkite input elementą (formos ar mygtuko nereikia), kur vartotojas galės
//įrašyti savo vardą. Kai rašo - keičiasi puslapio stilius. Jei įrašytos yra du
//simboliai arba mažiau - viso puslapio fonas raudonas. Jei daugiau nei du
//simboliai - puslapio fonas žalias.

// document.querySelector('input').addEventListener('input', myFunction)
// function myFunction (event) {
//     const myName = document.querySelector('input[name=name]').value
//     if (myName.length <= 2) {
//         document.querySelector('body').style.backgroundColor = 'red'
//     } else {
//         document.querySelector('body').style.backgroundColor = 'green'
//     }
// }

//5.Sukurkite mygtuką HTML'e. O su JS pasirašykite array su keturiom spalvom
//(["red", "green", "blue", "yellow"]). Paspaudus ant mygtuko - tegul jo
//spalva pasikeičia į atsitiktinę spalvą.

// let colors = ["red", "green", "blue", "yellow"]
// document.querySelector('button').addEventListener('click', () => {
//     const randomIndex = Math.round(Math.random()*4)
//     document.querySelector('button').style.backgroundColor = colors[randomIndex]
    
// })

//6.Pasikoreguokime penktą pratimą - šį kartą array nereikės, keisime RGB
//spalvas. Paspaudus ant mygtuko, susigeneruoja trys random skaičiai
//(nuo 0 iki 255, imtinai), šie skaičiai atvaizduoja spalvų paletę
//(red, green, blue => RGB). Padarykite, kad paspaudus ant mygtuko, jo fono
//spalva pasikeistų į atsiktinę spalvą pagal RGB paletę.

//NESUPRANTU ÎTO NIEKAIP
function randomColors () {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min +1 ))
    const r = randomBetween (0, 255)
    const g = randomBetween (0, 255)
    const b = randomBetween (0, 255)
    return `rgb(${r},${g},${b})`
}
document.querySelector('button').addEventListener('click', event  => {
    document.querySelector('button').style.backgroundColor = randomColors()
})
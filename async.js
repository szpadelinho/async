function getData(url){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(Math.random > 0.5){
                resolve({dane: "Przykładowe dane"})
            }else{
                reject(new Error("Błąd pobierania danych"))
            }
        }, 1000)
    })
}

async function downloadFunction(){
    try{
        console.log("Pobieranie log...")
        const odpowiedz = await getData("http://bartosz.country")
        console.log("Pobrane dane: ", odpowiedz.dane)
    }
    catch(err){
        console.error("Błąd: ", err.message)
    }
}

downloadFunction()

// getData("http://tojest.suchy.pedalaż.pl")
//     .then(odpowiedz => console.log("Dane: ", odpowiedz.dane))
//     .catch(blad => console.error("Błąd: ", blad.message))

// console.log("Pobieranie danych...")
// for(i=0; i<10; i++){
//     console.log(`Aktualny numer ${i}`)
// }

// function asyncFunction(callback){
//     setTimeout(() => {
//         callback("Dane pobrane z serwera")
//     }, 2000)
// }

// console.log("Start. Jesteśmy przed wywołaniem funkcji async.")
// console.log("Wywołuję funkcję async.")
// asyncFunction(data => {
//     console.log("Otrzymane dane: ", data)
// })
// console.log("Tekst umieszczony po funkcji async.")
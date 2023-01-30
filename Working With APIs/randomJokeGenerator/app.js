const button = document.getElementById('get-new-joke-btn')
const jokeParagraph= document.querySelector('.container p')
document.addEventListener('DOMContentLoaded',getJoke)

button.addEventListener('click',getJoke)


function getJoke(){
    fetch('https://icanhazdadjoke.com/',
    {
        headers:{
            'Accept': 'application/json'
        }
    }).then(data=> data.json())
    .then(obj=> jokeParagraph.textContent = obj.joke)
}

//  async function getJoke(){
//     const jokeData = await fetch('https://icanhazdadjoke.com/',{
//         headers:{
//             'Accept': 'application/json'
//         }
//     })
//     const jokeObj = await jokeData.json()
//     jokeParagraph.textContent = jokeObj.joke
    
// }
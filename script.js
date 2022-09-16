const inputSearch = document.querySelector('#inputSearch');
const btnSearch = document.querySelector('#btnSearch');
const charactersContainer = document.getElementById('charactersContainer')


window.addEventListener('DOMContentLoaded', () => {
    getApi()
})

//Funcion para traer api de Rick and Morty usando fetch

const getApi = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        console.log(data)
        showCharacters(data)
    } catch (err) {
        console.error(err)
    }
}

const showCharacters = (dataCharacters) => {
    
    const arrCharacters = dataCharacters.results
    console.log(arrCharacters)
    arrCharacters.map((char)=> {
        const targetContainer = document.createElement('div')
        const titleElement = document.createElement('h3')
        const imgElement = document.createElement('img')
        imgElement.setAttribute('src', `${char.image}`)
        const titleName = document.createTextNode(`${char.name}`)

        charactersContainer.appendChild(targetContainer)
        targetContainer.append(titleElement)
        titleElement.append(titleName)
        targetContainer.append(imgElement)
    }) 
}

const inputSearch = document.querySelector('#inputSearch');
const btnSearch = document.querySelector('#btnSearch');

window.addEventListener('DOMContentLoaded', () => {
    getApi()
})

//Funcion para traer api de Rick and Morty usando fetch

const getApi = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.error(err)
    }
 
}
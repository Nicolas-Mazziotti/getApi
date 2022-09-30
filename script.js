const inputSearch = document.querySelector('#inputSearch');
const btnSearch = document.querySelector('#btnSearch');
const charactersContainer = document.getElementById('charactersContainer');
const btnNext = document.querySelector('#nextPage');
const btnPrevious = document.querySelector('#previousPage');


window.addEventListener('DOMContentLoaded', () => {
    getApi()
    
})

//Funcion para traer api de Rick and Morty usando fetch


const getApi = async () => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/`)
        const data = await response.json()
        console.log(data)
        showCharacters(data)
        charactersPage(data)
    } catch (err) {
        console.error(err)
    }
}

const showCharacters = (dataCharacters) => {
    
    const arrCharacters = dataCharacters.results
    console.log(arrCharacters)
    arrCharacters.map((char)=> {
        
        const targetContainer = document.createElement('div')
        targetContainer.classList.add('cardContainer')
        const imgElement = document.createElement('img')
        imgElement.style.width = '18rem'
        imgElement.setAttribute('src', `${char.image}`)
        imgElement.classList.add('card-img-top')
        const titleElement = document.createElement('h3')
        const titleName = document.createTextNode(`${char.name}`)
        
        charactersContainer.appendChild(targetContainer)
        targetContainer.appendChild(imgElement)
        targetContainer.appendChild(titleElement)
        titleElement.appendChild(titleName)
        targetContainer.appendChild(imgElement)
    }) 
}




//Function pagination


const charactersPage = (dataCharacters) => {
    const nexting = dataCharacters.info.next 
    btnNext.addEventListener('click', () => {
        console.log(nexting)
       return nexting
       
         }  
    )
}






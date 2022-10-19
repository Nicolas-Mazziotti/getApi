// const inputSearch = document.querySelector('#inputSearch');
// const btnSearch = document.querySelector('#btnSearch');
// const charactersContainer = document.getElementById('charactersContainer');
// const btnNext = document.querySelector('#nextPage');
// const btnPrevious = document.querySelector('#previousPage');

// let characters = []

// window.addEventListener('DOMContentLoaded', () => {
//         getApi()
// })

// //Funcion para traer api de Rick and Morty usando fetch

// const getApi = async () => {
//     try {
//         const response = await fetch(`https://rickandmortyapi.com/api/character`)
//         const data = await response.json()
//         console.log(data)
//         showCharacters(data)
//         charactersPage(data)
//         handleInput(data)
    
        
        
        
//     } catch (err) {
//         console.error(err)
//     }
    
// }

// const showCharacters = (dataCharacters) => {
    
//     const arrCharacters = dataCharacters.results
//     console.log(arrCharacters)
//     arrCharacters.map((char)=> {
        
//         const targetContainer = document.createElement('div')
//         targetContainer.classList.add('cardContainer')
//         const imgElement = document.createElement('img')
//         imgElement.setAttribute('src', `${char.image}`)
//         imgElement.classList.add('card-img-top')
//         const titleElement = document.createElement('h3')
//         const titleName = document.createTextNode(`${char.name}`)
        
//         charactersContainer.appendChild(targetContainer)
//         targetContainer.appendChild(imgElement)
//         targetContainer.appendChild(titleElement)
//         titleElement.appendChild(titleName)

        

//     })
    
// }


// //Function pagination


// const charactersPage = (dataCharacters) => {
//     const nexting = dataCharacters.info.next 
//     btnNext.addEventListener('click', () => {

//         getApi(nexting)
//         console.log(nexting)
//         })
//     }  
    

// //Function search characters

// const handleInput = (arrCharacters) => {
//     console.log(arrCharacters)
//     let inputValue= inputSearch.value
//     console.log(inputValue)
//     let nameCharacter = arrCharacters.results
    
//     //filter name
//     const newCharacters = nameCharacter.filter((nameChar) => {
//         nameChar.name.includes(inputValue)
//         showCharacters(newCharacters)
//     })

// }


// btnSearch.addEventListener('click', () => {
//         handleInput()
//     })



const inputSearch = document.querySelector('#inputSearch')

window.addEventListener('DOMContentLoaded', async() => {
    console.log('Dom Loaded')
    const arrCharacters = await getCharacters()
    showCharacters(arrCharacters)

})


// Funcion para traer api Rick and Morty

const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    const dataArr = data.results
    return dataArr
}

//Function to show characters at dom
//(characters) recibe array line 99/100
const showCharacters = (characters) =>{
    characters.map((char) => {
        const targetContainer = document.createElement('div')
        targetContainer.classList.add('cardContainer')
        const imgElement = document.createElement('img')
        imgElement.setAttribute('src', `${char.image}`)
        imgElement.classList.add('card-img-top')
        const titleElement = document.createElement('h3')
        const titleName = document.createTextNode(`${char.name}`)
        
        charactersContainer.appendChild(targetContainer)
        targetContainer.appendChild(imgElement)
        targetContainer.appendChild(titleElement)
        titleElement.appendChild(titleName)
    })
}








const inputSearch = document.querySelector('#inputSearch')
const tagName = document.getElementsByClassName('cardContainer')
const btnNext = document.getElementById('nextPage')


window.addEventListener('DOMContentLoaded', async() => {
    const arrCharacters = await getApi();
    showCharacters (arrCharacters);
    searchCharacter()
    
})


let pagination = 1;

// Function to get rick and morty api

const getApi = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagination}`)
    const data = await response.json()
    const dataArr = data.results
     return dataArr   
 }

 

//Function to show characters at dom
//(characters) receive array line 99/100
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

// Function to search characters

const searchCharacter = () => {

    let regex = new RegExp(inputSearch.value,'i')
    for (let i=0; i < tagName.length; i++) {
        let valueTagName = (tagName[i])
        if(regex.test(valueTagName.innerText)){
            valueTagName.classList.remove('hide')
        }else{
            valueTagName.classList.add('hide')
        }
    }
}

 inputSearch.addEventListener('keyup', searchCharacter);




 









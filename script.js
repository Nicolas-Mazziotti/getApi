
const inputSearch = document.querySelector('#inputSearch')
const charactersContainer = document.getElementById('charactersContainer')
console.log(charactersContainer)
const tagName = document.getElementsByClassName('cardContainer')
const btnNext = document.getElementById('nextPage')


window.addEventListener('DOMContentLoaded', async() => {
    await getApi();
    searchCharacter()   
})


let pagination = 0;

// Function to get rick and morty api

const getApi = async () => {
    pagination ++ ;
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagination}`)
    const data = await response.json();
    let dataArr = data.results;
    console.log(dataArr);
    showCharacters(dataArr);
    console.log(response)
 }

 

//Function to show characters at dom
//(characters) receive array line 27
const showCharacters = (characters) =>{
    characters.map((char) => {
        const targetContainer = document.createElement('div')
        targetContainer.classList.add('cardContainer')
        const imgElement = document.createElement('img')
        imgElement.setAttribute('src', `${char.image}`)
        imgElement.classList.add('card-img-top')
        const titleElement = document.createElement('h3')
        const titleName = document.createTextNode(`${char.name}`)
        const statusElement = document.createElement('h5')
        const statusName = document.createTextNode(`${char.status}`)
        
        charactersContainer.appendChild(targetContainer)
        targetContainer.appendChild(imgElement)
        targetContainer.appendChild(titleElement)
        targetContainer.appendChild(statusElement)
        statusElement.append(statusName)
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

 
 btnNext.addEventListener('click',(e) => {
    e.preventDefault();
    console.log(e)
    charactersContainer.innerHTML =+ ``; 
    console.log(charactersContainer)
    getApi()
 });

//  btnPrueba.addEventListener('click', async() => {
//     pagination = 6 ;
//     const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagination}`)
//     console.log(response)
//     const data = await response.json()
//     const dataArr = data.results
//     console.log(dataArr)
//     showCharacters(dataArr)
//  })


 









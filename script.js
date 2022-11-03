
const inputSearch = document.querySelector('#inputSearch');
const charactersContainer = document.getElementById('charactersContainer');
const tagName = document.getElementsByClassName('cardContainer');
const btnPageOne = document.getElementById('pageOne');
const btnNext = document.getElementById('nextPage');
const btnPrevious = document.getElementById('previousPage')
const btnPrueba = document.getElementById('prueba');


window.addEventListener('DOMContentLoaded', async() => {
    await getApi();
    searchCharacter() 
})


let pagination = 1;
// Function to get rick and morty api

const getApi = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagination}`)
    const data = await response.json();
    let dataArr = data.results;
    showCharacters(dataArr);
    
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

 
 // button next page
 btnNext.addEventListener('click',(e) => {
    btnPrevious.classList.remove('hide')
    e.preventDefault();
    charactersContainer.innerText = ``;
    pagination ++;
    getApi();
 });

 // button previous page
 btnPrevious.addEventListener('click',(e) => {
    e.preventDefault();
    charactersContainer.innerText = ``;
        pagination --
        if (pagination == 1){     
        btnPrevious.classList.add('hide')
        }
    getApi(pagination);
 });







 









const baseURL = "https://api.tvmaze.com";

const xhr = new XMLHttpRequest(); //instance XML


const movie = document.getElementById("movies");
const open = document.createElement('div');


xhr.onreadystatechange = (progress) => {
    if (xhr.readyState === 1) {
        setTimeout(() => {
            return movie.innerText = 'Запрос открыт!'
        }, 1000);
    } else if (xhr.readyState === 2) {
        clearTimeout()
        setTimeout(() => {
            return movie.innerText = 'Запрос отправлен!'
        }, 3000)
    } else if (xhr.readyState === 3) {
        clearTimeout()
        setTimeout(() => {
            return movie.innerText = 'Loading...'
        }, 5000)
    } else if (xhr.readyState === 4) {
        clearTimeout()
        setTimeout(() => {
            return movie.innerText = 'Отправка ответа!'
        }, 7000)
    }
}
xhr.onload = (response) => {
    const movies = document.querySelector('.movies');
    const data = JSON.parse(response.target.response);
    setTimeout(() => {
        for (let i = 0; i < data.length; i++) {
            movies.innerHTML += `
             <div>
                  <img src="${data[i].image.medium}"/>
                  <button><a href="${data[i].url}">${data[i].name}</a></button>
             </div>
            `;
        }
    }, 8000)
}

xhr.open('GET', `${baseURL}/show?page=1`);
xhr.send()


//readyState = 1 запрос открыт
//readyState = 2 запрос отправлен
//readyState = 3 получение данных частично
//readyState = 4 отправка ответа



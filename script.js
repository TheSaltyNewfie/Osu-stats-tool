const location = document.querySelector('#location')
const weatherType = document.querySelector('#weatherType')
const temperature = document.querySelector('#temperature')
const humidity = document.querySelector('#humidity')
const description = document.querySelector('#description')
const submit = document.querySelector('#submitBtn')
const results = document.querySelector('.infoarea')

async function getCredentials() {
    const response = await fetch('/credentials.json');
    const data = await response.json();
    return data;
}

function addToLocalStorage(key, data) {
    var local = localStorage.getItem(key)
    
    if(!local === null) {
        local += JSON.stringify(data)
        localStorage.setItem(key, local)
    }

    localStorage.setItem(key, JSON.stringify(data))
}

function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}

function deleteFromLocalStorage(key) {
    localStorage.removeItem(key)
}

function lengthOfLocalStorage() {
    return localStorage.length
}


async function getWeather(postalCode) {
    const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${await getCredentials().weather_key}&q=${postalCode}&aqi=no`)

    return res.data;
}

function prepareData(keyIdentifier) {
    
}

async function compare(userData, weatherData) {
    
}

submit.addEventListener('click', () => {
    addToLocalStorage('test', {name: 'toby', age: 18})

    console.log(getFromLocalStorage('test'))

    addToLocalStorage('test', {name: 'peepnis', age: 69})

    console.log(getFromLocalStorage('test'))

    deleteFromLocalStorage('test')
})
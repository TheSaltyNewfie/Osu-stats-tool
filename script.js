const location = document.querySelector('#location')
const weatherType = document.querySelector('#weatherType')
const temperature = document.querySelector('#temperature')
const humidity = document.querySelector('#humidity')
const description = document.querySelector('#description')
const submitBtn = document.querySelector('#submitBtn')
const results = document.querySelector('#past-journals')

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

function prepareData() {
    let keys = []
    
    for(let i = 0; i < lengthOfLocalStorage(); i++) {
        let key = getFromLocalStorage(i);
        console.log(key)
        keys.push(key)
    }

    return keys
}

function updateResults(keys) {
    keys.forEach(key => {
        results.innerHTML += `
            <div id="card">
                <div>
                    <h2>Location: <span id="location1">${key.location}</span></h2>
                    <p>Weather: <span id="weatherType1">${key.weatherType}</span></p>
                    <p>Temperature: <span id="temperature1">${key.temperature}</span>°C</p>
                    <p>Humidity: <span id="humidity1">${key.humidity}</span>%</p>
                    <p>Description: <span id="description1">${key.description}</span></p>
                </div>
                <br>
                <div>
                    <h2>API Results</h2>
                    <p>Weather: <span id="weatherType1">${key.api_weatherType}</span></p>
                    <p>Temperature: <span id="temperature1">${key.api_temperature}</span>°C</p>
                    <p>Humidity: <span id="humidity1">${key.api_humidity}</span>%</p>
                </div>
            </div>
        `
    })
}

async function submit() {
    let creds = await getCredentials()
    let res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${creds.weather_key}&q=${location.value}&aqi=no`)
    let keys = prepareData()

    let data = {
        location: location.value,
        weatherType: weatherType.value,
        temperature: temperature.value,
        humidity: humidity.value,
        description: description.value,
        api_weatherType: res.data.current.condition.text,
        api_temperature: res.data.current.temp_c,
        api_humidity: res.data.current.humidity
    }

    addToLocalStorage(lengthOfLocalStorage().toString(), data)
    updateResults(keys)
}

async function init() {
    let keys = prepareData()

    if(keys.length > 0) {
        updateResults(keys)
    }
}

await init()

submitBtn.addEventListener('click', async () => {
    await submit()
})
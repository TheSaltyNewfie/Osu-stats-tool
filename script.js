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

async function getWeather(postalCode) {
    const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${await getCredentials().weather_key}&q=${postalCode}&aqi=no`)

    return res.data;
}

function getPrevData() {
    
}

async function addData(data) {
    let credentials = await getCredentials()

    const url = "https://pastebin.com/api/api_post.php"
    const formData = new FormData()
    formData.append('api_dev_key', credentials.pastebin_key)
    console.log(credentials.pastebin_key)
    formData.append('api_user_name', credentials.pastebin_user)
    formData.append('api_user_password', credentials.pastebin_password)
    formData.append('api_option', 'paste')
    formData.append('api_paste_code', JSON.stringify(data))

    const response = await axios.post(url, formData)

    console.log(response.data)

}

function compare(userData, weatherData) {
    // compare data and return a result

}

submit.addEventListener('click', async () => {
    await addData("Hello World!")
})
const id = document.querySelector('#appid').value
const secret = document.querySelector('#secret').value
const baseURL = "https://osu.ppy.sh/api/v2"
let access_token = ""

const infoarea = document.querySelector('#infoarea')
const btn = document.querySelector('#test')

async function getToken() {
    if(access_token === "") {
        let res = await axios.get(`${baseURL}/oauth/token/client_id=${id}&client_secret=${secret}&grant_type=client_credentials&scope=public`)
        access_token = res.data.access_token
        return access_token
    }

    return access_token // return here, since if the token is already set, we don't need to get a new one
}

async function showInfo() {
    let token = await getToken()

    let res = await axios.get(`${baseURL}/users/2`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    infoarea.innerHTML = `
        <p>Username: ${v2User.username}</p>
        <p>Country: ${v2User.country}</p>
        <p>Playcount: ${v2User.statistics.play_count}</p>
    `
}

btn.addEventListener('click', showInfo)
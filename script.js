const id = document.querySelector('#userID')
let access_token = ""

const infoarea = document.querySelector('#infoarea')
const btn = document.querySelector('#test')

async function getCredentials() {
    const response = await fetch('/credentials.json');
    const data = await response.json();
    return data;
}

const credentials = await getCredentials()

const tokenData = {
    client_id: credentials.id,
    client_secret: credentials.secret,
    grant_type: 'client_credentials',
    scope: 'public'
}

async function getToken() {
    if(access_token == "") {
        await axios.post('https://osu.ppy.sh/oauth/token', tokenData, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            access_token = response.data.access_token
            return access_token
        })
    }
    console.log(access_token)
    return access_token
}

async function showInfo() {
    const response = await axios.get(`https://osu.ppy.sh/api/v2/user/${id.value}/osu`, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
}

btn.addEventListener('click', await showInfo)
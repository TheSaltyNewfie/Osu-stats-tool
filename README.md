# Weather-Journal
A pure javascript and HTML app that allows a user to journal the weather they see, and compare it to other data which is from the [Weather API](https://www.weatherapi.com/)

## How will I do this?
To save journals I use a feature from the browser, that allows me to save data to the clients computer, here is an example of this:
```js
localStorage.setItem('Person', {'Name': 'John Doe'}) // create a key called "Person" and give it data

let data = JSON.parse(localStorage.getItem('Person'))

console.log(data) // expected result should be {'Name': 'John Doe'}
```

Local storage in the browser has a max of 5 MB of data, so I am limited by that

## Whiteboarding

Unfortunately because I had to switch APIs midway for this assignment, I do not have any whiteboarding for it, but I have whiteboarding of the original project!

Here is the whiteboarding I created: 
![Whiteboarding](/whiteboarding.drawio.png)

## Pseudo code

Unfortunately I didnt do much pseudo code for this project, mainly because I find it easier to research my topic instead.

Essentially the way it would look is as such (Formatted with JS so its easier to see what is going on with syntax highlighting)

```js
let API = "https://osu.ppy.sh/api/v2/"
let res = get(`${API}/me/osu`)

console.log(res) // useful for seeing what is in the response

infoVariable += `
    <h2>Profile Stats</h2>
    <ul>
        <li>Username: ${res.username}</li>
        <li>Rank: ${res.rank}</li>
        <li>Country: ${res.country}</li>
        <li>Play Count: ${res.playCount}</li>
        <li>Accuracy: ${res.accuracy}</li>
    </ul>
`

info.innerHTML = infoVariable;

```

This is super basic, and doesnt cover everything such as CSS or even authentication.

## Technology

[Axios](https://axios-http.com/docs/intro)
[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)


## Sources

[Weather API](https://www.weatherapi.com/)

[MDN Docs](https://developer.mozilla.org/en-US/)
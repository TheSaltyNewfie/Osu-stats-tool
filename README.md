# Osu-stats-tool
A tool that shows the user their profile stats, with other metrics included

## How will I do this?
Considering I am doing this with essentially bare javascript, I am going to use axios for API calls, and the Osu! V2 API

## Whiteboarding

Here is the whiteboarding I created
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

## Sources

[Osu API Wiki](https://osu.ppy.sh/docs/index.html)
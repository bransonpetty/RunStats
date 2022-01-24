const url = "https://www.strava.com/api/v3/athletes/12773971/stats"
console.log(url)
fetch(url, {
    method: 'get',
    headers: new Headers({
        'Authorization': 'Bearer 9f1814c42194fa16e17d24563b3c8d77d6cf6945'
    })
})
    .then(function(response) {
        // console.log(response.json)
    });
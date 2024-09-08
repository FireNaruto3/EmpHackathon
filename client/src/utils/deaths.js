function deathCount(dead){
    fetch('/add_deaths', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({dead}),
    })
    .then(response => response.json())
    .then(data => {
        return "you've died " + data.DEATHS + " times";
    });
}
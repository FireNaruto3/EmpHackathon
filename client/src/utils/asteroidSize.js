export const getData = () =>{
    fetch('/get_asteroid_data', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        
        console.log("hi i got this far")
        window.alert('hi')

    });

}
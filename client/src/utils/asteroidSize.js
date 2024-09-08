import React from "react";

function getData(){
    fetch('/get_asteroid_data', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        
        console.log("hi i got this far")

    });


}
"use strict";

const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "29abce5e26f6895ac2883c359d2dc9232d29f1f4";
let query = "барн";
const option = document.createElement("option");
const addressList = document.getElementById("addressList");
const address = document.getElementById("address");



$(address).keyup(function (event) {
    query = address.value;
    let options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({
            query: query,
            count: 4
        })
    };
        fetch(url, options)
            .then(response => response.json())
            .then(result => {
                addressList.innerHTML = "";
                result.suggestions.forEach(e => {
                    addressList.innerHTML += "<option>" + e.value + "</option>";
                });
            })
            .catch(error => console.log("error", error));
    });
    
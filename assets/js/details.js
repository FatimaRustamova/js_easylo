let id = new URLSearchParams(window.location.search).get("id");
let details = document.querySelector(".details")

fetch(`http://localhost:3000/Easylo/${id}`)
.then(res => res.json())
.then(data => {
    details.innerHTML = `
    <div class="car">
        <img src="${data.image}" alt="">
        <span>${data.name}</span>
        <h2>${data.question}</h2>
        <p>${data.desc}</p>
    </div>
    `
})

let back = document.querySelector("#back");

back.addEventListener("click", ()=>{
    window.location = "./index.html"
})
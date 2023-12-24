let favorite = document.querySelector("#favorite");

fetch("http://localhost:3000/Favorites")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        favorite.innerHTML += `
            <div class="car">
                <i class="bi bi-heart-fill"></i>
                <img src="${element.image}" alt="">
                <span>${element.name}</span>
                <h2>${element.question}</h2>
                <p>${element.desc}</p>
                <button onclick="deleteFav(${element.id})">Delete</button>
            </div>
        `
    })
})


//---Delete---//
function deleteFav(id){
    axios.delete(`http://localhost:3000/Favorites/${id}`);
    window.location.reload();
}


let back = document.querySelector("#back");

back.addEventListener("click", ()=>{
    window.location = "./index.html"
})
//---Data---//
let get = document.querySelector(".data");
let page = 3;
let arr = [];
let search = document.querySelector("input[type=search]");

function getAllData(){
    fetch("http://localhost:3000/Easylo")
    .then(res => res.json())
    .then(data => {
        get.innerHTML = "";
        arr = search.value ? arr : data;
        data.slice(0, page).forEach(element => {
            get.innerHTML += `
            <div class="car">
                <i class="bi bi-heart" onclick="favoriteEl(${element.id})"></i>
                <img src="${element.image}" alt="">
                <span>${element.name}</span>
                <h2>${element.question}</h2>
                <p>${element.desc}</p>
                <button onclick="viewDetails(${element.id})">View Details</button>
                <button onclick="deleteEl(${element.id})">Delete</button>
                <button onclick="updateEl(${element.id})">Update</button>
            </div>
            `
        })
    })
}

getAllData();

//---View Details---//
function viewDetails(id){
    window.location = `./details.html?id=${id}`
}

//---Load---//
let load = document.querySelector("#load");

load.addEventListener("click", ()=>{
    if(load.innerText == "Load More"){
        page +=3;
        get.innerHTML = "";
        getAllData();
        load.innerText = "Less More"
    }
    else{
        page -=3;
        get.innerHTML = "";
        getAllData();
        load.innerText = "Load More"
    }
})

//---Delete---//
function deleteEl(id){
    axios.delete(`http://localhost:3000/Easylo/${id}`);
    window.location.reload();
}

//---Update---//
function updateEl(id){
    window.location = `./update.html?id=${id}`
}

//---Favorites---//
function favoriteEl(id){
    axios.get(`http://localhost:3000/Easylo/${id}`)
    .then(res => {
        axios.post("http://localhost:3000/Favorites", res.data)
    });
    alert("Your selected item has been sent to your Favorites data");
}

//---Search---//
search.addEventListener("input", (e)=>{
    arr = arr.filter((el) =>{
        el.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    getAllData();
})

//---Navbar---//
let nav = document.querySelector("nav");
let apply = document.querySelector("#apply");

window.addEventListener("scroll", ()=>{
    if(window.scrollY>400){
        nav.style.position = "fixed";
        nav.style.backgroundColor = "seagreen";
        apply.style.backgroundColor = "#0F4332";
    }
    else{
        nav.style.position = "";
        nav.style.backgroundColor = "";
        apply.style.backgroundColor = "";
    }
})

//---Menu---//
let list = document.querySelector("#list");
let modal = document.querySelector(".modal")

list.addEventListener("click", ()=>{
    modal.classList.toggle("none")
})

//---Hurricane---//
let hurricane = document.querySelector(".hurricane");

window.addEventListener("scroll", ()=>{
    if(window.scrollY>400){
        hurricane.style.visibility = "visible"
    }
    else{
        hurricane.style.visibility = ""
    }
})

hurricane.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        left: 0, 
        behavior: "smooth"
    })
})
let id = new URLSearchParams(window.location.search).get("id");
let form = document.querySelector("#form");
let file = document.querySelector("input[type=file]")
let name = document.querySelector("#name");
let question = document.querySelector("#question");
let desc = document.querySelector("#desc");
let image = document.querySelector("#img");

fetch(`http://localhost:3000/Easylo/${id}`)
.then(res => res.json())
.then(data => {
    image.src = data.image;
    name.value = data.name;
    question.value = data.question;
    desc.value = data.desc
})

file.addEventListener("input", (e)=>{
    let file = e.target.files[0]
    if(file){
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>{
            image.src = reader.result
        }
    }
})

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let obj = {
        image: image.src,
        name: name.value,
        question: question.value,
        desc: desc.value
    }
    axios.patch(`http://localhost:3000/Easylo/${id}`, obj)
    .then(res => {
        window.location = "./index.html"
    })
})


let back = document.querySelector("#back");

back.addEventListener("click", ()=>{
    window.location = "./index.html"
})
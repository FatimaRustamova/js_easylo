let form = document.querySelector("#form");
let file = document.querySelector("input[type=file]")
let name = document.querySelector("#name");
let question = document.querySelector("#question");
let desc = document.querySelector("#desc");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let obj = {};
    let reader = new FileReader();
    let src = file.files[0];
    
    reader.onload = (e) => {
        obj = {
            image: e.target.result,
            name: name.value,
            question: question.value,
            desc: desc.value
        }
        axios.post("http://localhost:3000/Easylo", obj)
        .then(res => {
            window.location = "./index.html"
        })
     }
     reader.readAsDataURL(src)
})

let back = document.querySelector("#back");

back.addEventListener("click", ()=>{
    window.location = "./index.html"
})
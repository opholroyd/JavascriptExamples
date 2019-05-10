
document.getElementById("myBtn").addEventListener("click", function () {
    
    let times = document.getElementById("num").value
    let pic = document.getElementById("query").value
    
    for (i = 0; i < times; i++) {
        let randomNum = Math.floor(Math.random() * 600) + 1;
        let wrapper = document.getElementById("wrapper");
        let box = document.createElement("div");
        box.id = "box";

        // let text = document.createTextNode("JS");
        let img = document.createElement("img");
        img.src = "https://source.unsplash.com/random/500x500/?sig=" + randomNum
        img.style.height = "100%";
        img.style.width = "100%"
        box.appendChild(img);

        wrapper.appendChild(box);
    }
    
})
document.getElementById("clear").addEventListener("click", function () {
location.reload(true)
})
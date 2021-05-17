let bars = document.querySelector(".bars");
let cross = document.querySelector(".cross");
let navigation = document.querySelector(".navigation");
let toggle = document.querySelector("#toggle");





function randomNumber() {
   
    let num = Math.floor(Math.random() * 8);
    return num;
}





bars.addEventListener("click", () => {
    if(toggle.checked === false) {
    bars.innerHTML = `<i class="fas fa-times"></i>`;
    bars.style.zIndex = 101;
    bars.style.color = "red";
    bars.style.position = `fixed`;
    bars.style.fontSize = "5rem";
     
    }
    display();
})



function display() {
    if(toggle.checked === true) {
        
        bars.innerHTML = `<i class="fas fa-bars"></i>`;
        bars.style.zIndex = 1;
        bars.style.position = `absolute`;
        bars.style.color = "orange";
        bars.style.fontSize = "3rem";
    }
}




display();
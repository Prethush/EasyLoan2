let heroBg = document.querySelector(".hero");
let imageContainer = document.querySelectorAll(".image-container");
let bgArray = [
    {
        img: "assets/media/hero/bg-02.jpg"
    },

    {
        img: "assets/media/hero/bg01.jpg"
    },

    {
        img: "assets/media/hero/loan-03.jpg"
    },

    {
        img: "assets/media/hero/loan-04.jpg"
    },

    {
        img: "assets/media/hero/loan-05.jpg"
    },

    {
        img: "assets/media/hero/loan-06.jpg"
    },

    {
        img: "assets/media/hero/loan-07.jpg"
    },

    {
        img: "assets/media/hero/loan-08.jpg"
    }


];

function randomNumber() {
   
    let num = Math.floor(Math.random() * 8);
    return num;
}


let loanImages = [
    {
        img: "assets/media/loans/personal_loan.jpg"
    }
    ,
    {
        img: "assets/media/loans/business_loan.jpg"
    },
    {
        img: "assets/media/loans/education_loan.jpg"
    },
    {
        img: "assets/media/loans/health_loan.jpg"
    },
    {
        img: "assets/media/loans/commercial_loan.jpg"
    }

]


function handleLoad() {
    heroBg.style.backgroundImage = `url(${bgArray[randomNumber()].img})`;
    heroBg.style.backgroundSize = `cover`;
    heroBg.style.backgroundRepeat = `no-repeat`;
    heroBg.style.backgroundPosition = `center center`;


}

imageContainer = Array.from(imageContainer);
imageContainer.forEach((elm, i) => {
    elm.style.backgroundImage = loanImages[i].img; 
    elm.style.backgroundSize = `cover`;
    elm.style.backgroundRepeat = `no-repeat`;
    elm.style.backgroundPosition = `center center`;
})

setInterval(handleLoad, 1000);
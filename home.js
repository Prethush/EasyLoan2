let heroBg = document.querySelector(".hero");

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

heroBg.style.backgroundImage = `url(assets/media/hero/bg-02.jpg)`;
heroBg.style.backgroundSize = `cover`;
heroBg.style.backgroundRepeat = `no-repeat`;
heroBg.style.backgroundPosition = `center center`;
function handleLoad() {
    heroBg.style.backgroundImage = `url(${bgArray[randomNumber()].img})`;
    heroBg.style.backgroundSize = `cover`;
    heroBg.style.backgroundRepeat = `no-repeat`;
    heroBg.style.backgroundPosition = `center center`;


}

setInterval(handleLoad, 2000);
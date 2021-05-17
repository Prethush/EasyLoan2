
let teamMember = document.querySelectorAll(".team-member");

let teamImages = [
    {
        img: "assets/media/team/member6.jpg"
    },

    {
        img: "assets/media/team/member7.jpg"
    },

    {
        img: "assets/media/team/member8.jpg"
    },
];

teamMember = Array.from(teamMember);

teamMember.forEach((elm, i) => {
    elm.style.backgroundImage = teamImages[i].img;
    elm.style.backgroundSize = `cover`;
    elm.style.backgroundRepeat = `no-repeat`;
    elm.style.backgroundPosition = `center center`;
});
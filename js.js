"use strict";

let iconIG = document.querySelector('.iconIG');
let iconFB = document.querySelector('.iconFB');

iconIG.addEventListener('mouseover', () => {
    iconIG.src = "icon-instagram2.png";
});
iconIG.addEventListener('mouseout', () => {
    iconIG.src = "icon-instagram1.png";
});

iconFB.addEventListener('mouseover', () => {
    iconFB.src = "icon-facebook2.png";
});
iconFB.addEventListener('mouseout', () => {
    iconFB.src = "icon-facebook1.png";
});

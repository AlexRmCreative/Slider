import { createSlider, createSliderImage } from './components/slider.js';
import { assignClasses } from './cssClasses.js';

let sliderImgList = [];
for (let i = 0; i <= 5; i++) {
    let sliderImg = createSliderImage("./img/" + `Buceo16-9 (${i}).jpg`, 'Imagen de buceo');
    sliderImgList.push(sliderImg);
}

function initializePage() {
    const sliderContainer = document.getElementById("slider-container1");
    assignClasses();
}

function GetSliderContainer() {
    return document.getElementsByClassName("slider-container");
}

initializePage();
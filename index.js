import { createSlider, createSliderImage } from './components/slider.js';

let sliderImgList = [];
for (let i = 0; i <= 5; i++) {
    let sliderImg = createSliderImage("./img/" + `Buceo16-9 (${i}).jpg`, 'Imagen de buceo');
    sliderImgList.push(sliderImg);
}

function initializePage() {
    const slider = createSlider(sliderImgList);
    console.log(slider);
    // appendChild(createSlider('a'));
}

initializePage();
const slider = document.querySelector('div .slider');
const sliderContentList = Array.from(slider.querySelectorAll('.slider-content'));

function getTransformXY(element)
{
    const style = window.getComputedStyle(element);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return {
        transformX: matrix.m41,
        transformY: matrix.m42
    }
}

function moveSliderContent(sliderContent, posX, posY){
    sliderContent.style.transform = `translate(${posX}px, ${posY}px)`;
}

function initializePage() {
    //Movemos el slider actual (i) a su siguiente
    for (let i = 0; i < sliderContentList.length; i++) {
        let nextElemX;
        let nextElemY;
        if(i != sliderContentList.length - 1){
            nextElemX = getTransformXY(sliderContentList[i + 1]).transformX;
            nextElemY = getTransformXY(sliderContentList[i + 1]).transformY;
        }
        else{
            nextElemX = getTransformXY(sliderContentList[0]).transformX;
            nextElemY = getTransformXY(sliderContentList[0]).transformY;
        }
        moveSliderContent(sliderContentList[i], nextElemX, nextElemY);
    }
    UpdateMain();
}

function UpdateMain()
{
    //Obtiene el contenido central denominado con la clase 'main'
    let main = sliderContentList.findIndex(element => element.classList.contains('main'));
    //eliminamos el main actual para posteriormente pasarselo al siguiente correspondiente
    sliderContentList[main].classList.remove('main');
    
    if(main > 0)
        main--;
    else
        main = sliderContentList.length - 1;
    sliderContentList[main].className += 'main';
}

initializePage();
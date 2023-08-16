function createSliderContainer()
{
    const sliderDiv = document.createElement('div');
    sliderDiv.className = "slider-container";
    return sliderDiv;
}

function createBtnSlider(btnText)
{
    const btn = document.createElement('button');
    btn.className = "btn btn-slider btn-primary";
    btn.innerHTML = btnText;
    return btn;
}

function createSliderContent(contentHTML)
{
    if(contentHTML == null)
    {
        let pError = document.createElement("p");
        pError.innerHTML = "No se le ha asignado un elemento a este deslizante";
        contentHTML = pError;
    }
    console.log(contentHTML);
    const sliderContent = document.createElement('div');
    sliderContent.className = "slider-content";
    sliderContent.appendChild(contentHTML);
    return sliderContent;
}

function createSliderImage(src)
{
    const sliderImg = document.createElement('img');
    sliderImg.className = "slider-img";
    sliderImg.src = src;
    return sliderDiv;
}

export function createSlider(imgList)
{
    const slider = createSliderContainer();
    const btnLeft = createBtnSlider('<');
    const btnRight = createBtnSlider('>');
    const sliderContent = createSliderContent();
    
    slider.appendChild(btnLeft);
    slider.appendChild(sliderContent);
    slider.appendChild(btnRight);
    return slider;
}

// lista de imagenes

// boton
// const imgElement = document.createElement('img');
// imagenes
// boton

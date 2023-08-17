function createSliderRoot()
{
    const sliderDiv = document.createElement('div');
    sliderDiv.className = "slider";
    return sliderDiv;
}

function createBtnSlider(btnText)
{
    const btn = document.createElement('button');
    btn.className = "slider-btn btn btn-primary";
    btn.innerHTML = btnText;
    return btn;
}

function createSliderContainer(contentHTML)
{
    if(contentHTML == null)
    {
        let pError = document.createElement("p");
        pError.innerHTML = "No se le ha asignado un elemento a este deslizante";
        contentHTML = pError;
    }
    console.log(contentHTML);
    const sliderContent = document.createElement('div');
    sliderContent.className = "slider-container";
    sliderContent.appendChild(contentHTML);
    return sliderContent;
}

export function createSliderImage(src, alt)
{
    const sliderImg = document.createElement('img');
    sliderImg.className = "slider-img";
    sliderImg.src = src;
    sliderImg.alt = alt;
    return sliderImg;
}

export function createSlider(sliderImgList)
{
    const slider = createSliderContainer();
    const btnLeft = createBtnSlider('<');
    const btnRight = createBtnSlider('>');
    slider.appendChild(btnLeft);

    sliderImgList.forEach(img => {
        let sliderContent = createSliderContent(img);
        slider.appendChild(sliderContent);
    });

    slider.appendChild(btnRight);
    return slider;
}

// lista de imagenes

// boton
// const imgElement = document.createElement('img');
// imagenes
// boton

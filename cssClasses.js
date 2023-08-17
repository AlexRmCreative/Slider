//Obtenemos elementos con sus clases para asignarles clases de bootstrap

function GetSliderClasses() {
    const sliderClassList = document.querySelectorAll('[class*="slider"]');
    return sliderClassList;
}

//asignación de classes bootstrap
export function assignClasses() {
    const sliderClasses = GetSliderClasses();

    sliderClasses.forEach(element => {
        switch (element.className)
        {
            case "slider-container":
                element.className += " bg-primary";
                break;
        }
    });
}



function removeClassFromElement(selector, removeClassName){
    // const ele = document.querySelector(selector);
    // if (ele)
    //     ele.classList.remove(removeClassName);
    $(selector).removeClass(removeClassName);
}

function toggleClassOnElement(selector, className){
    // const ele = document.querySelector(selector);
    // ele.classList.toggle(className);
    $(selector).toggleClass(className);
}

function hideElements(target, removeType){
    const element = document.querySelectorAll(target)[0];
    switch (removeType) {
        case 'hide':
            // $(target).hide();
            element.style.display = 'none';
            break;
        case 'removeChildren':
            // $(target).empty();
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
            break;
        case 'removeSelf':
            // $(target).remove();
            element.remove();
            break;
        default: 
            console.log('Unknown remove option.')
    }
}

function addAttributeToElement(selector, attribute, value){
    // $(selector).attr(attribute,value);
    document.querySelector(selector).setAttribute(attribute, value)

	
}

function putPosInElement(selector){
    // const element = document.querySelector(selector);
    // const left = window.getComputedStyle(element).left;
    // const top = window.getComputedStyle(element).top;
    
    const left = $(selector).css("left");
    const top = $(selector).css("top");

    leftWithoutUnit = + left.slice(0, left.indexOf('px'));
    topWithoutUnit = + top.slice(0, top.indexOf('px'));


    return {
        "x" : leftWithoutUnit,
        "y": topWithoutUnit
    }
    
}



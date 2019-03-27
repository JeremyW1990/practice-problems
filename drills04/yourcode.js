

function changeElements(className){
    // for (let ele of $(className)) {
    for (let ele of document.querySelectorAll(className)) {
        let value = ele.innerText;
        switch (value) {
            case 'one':
                value = '1';
                break;
            case 'two':
                value = '2';
                break;
            case 'three':
                value = '3';
                break;
            case 'four':
                value = '4';
                break;
            case 'five':
                value = '5';
                break;
            case 'six':
                value = '6';
                break;
            case 'seven':
                value = '7';
                break;
            case 'eight':
                value = '8';
                break;       
            case 'nine':
                value = '9';
                break; 
            case 'zero':
                value = '0';
                break;   
        }
        ele.innerText = value;
    };
}

function appendTextToElement(className, appendText){
    for (let ele of document.querySelectorAll(className)) {
        ele.innerText += appendText; 
    }
}

function addClass(selector, className){
    // let count = 0;
    // for (let ele of document.querySelectorAll(selector)) {
    //     ele.classList.add(className);
    //     count++;
    // }
    const eleList = $(selector);
    for (let i = 0; i < eleList.length; i++) $(eleList[i]).addClass(className);
    return eleList.length;
}

function removeElements(selector){
    // $(selector).remove();
    for (var ele of document.querySelectorAll(selector)){
        ele.parentNode.removeChild(ele);
    }
}


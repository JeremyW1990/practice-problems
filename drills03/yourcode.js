

function getPath(arr){
    return arr.split('/');

}

function getPathParts(urlString){
    example: 'http://localhost:8000/happy/go/lucky/file.html' 
    const protocol = urlString.slice(0, urlString.indexOf('://'));
    urlString = urlString.slice(urlString.indexOf('://') + 3); 

    const host = urlString.slice(0, urlString.indexOf(':'));
    urlString = urlString.slice(urlString.indexOf(':') + 1); 
    
    const port = +urlString.slice(0, urlString.indexOf('/'));
    urlString = urlString.slice(urlString.indexOf('/') + 1); 

    const path = urlString.slice(0, urlString.lastIndexOf('/'));
    urlString = urlString.slice(urlString.lastIndexOf('/') + 1); 

    const file = urlString;
	return { protocol: protocol, host: host, port: port, path: path, file: file }
}

function getCapitalCount(arr){
    let count = 0;
    for (v of arr) if (v[0] === v[0].toUpperCase())  count ++;
    return count;
}

function correctCalcChecker(objArr){
    const resultObjArr = [];
    for (let obj of objArr) {
        if (doMath(obj['num1'], obj['num2'], obj['op'])  === obj['result']) {
            resultObjArr.push(obj)
        }
    }
    return resultObjArr;
}

function doMath(num1, num2, op){
    let result;
    switch (op){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break; 
        case '*':
            result = num1 * num2;
            break; 
        case '/':
            result = num1 / num2;
            break; 
        default: 
            console.log('Invalid operator.');
    }
    console.log(num1, num2, op, result)

    return result;
}


function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
	return sum;
}

function fitWithinVal(arr, max){
    let sum = 0;
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if ((sum + arr[i]) < max) {
            result.push(arr[i]);
            sum += arr[i];
        };
    }
	return result;

}

function getAllNamesShorterThan(arr, maxLength){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length < maxLength) result.push(arr[i]);
    }
	return result;
}

function makeLabel(person){
    // return "Miss. Chuckles McGee\n12345 Any St\nKansas City, Mo 63102"

    return person.greeting + " " + person.givenName + " " + person.familyName + "\n" + person['home address'].streetNumber + " " + person['home address'].streetName + "\n" + person['home address'].city + ", " + person['home address'].state + " " + person['home address'].zip

}



function populateRecords(objList){
    let chargeAmount = 0;
    let cashAdAmount = 0;
    for (const obj of objList) 
        obj['type'] === 'charge' ? chargeAmount += +obj['amount'] : cashAdAmount += +obj['amount'];
        
    
    const result = {
        "charge" : chargeAmount,
        "cash advance" : cashAdAmount
    }
    return result;
}



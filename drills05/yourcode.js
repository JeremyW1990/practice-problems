

function populateRecords(objList){
    makeTable(objList);
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

function makeTable(objList) {
    const tableElement = $('<table>');
    const rowElement = $('<tr>');

    const typeHeaderEle = $('<th>', {
        text: 'TYPE',
        class: 'transactionType'
    });        
    const sourceHeaderEle = $('<th>', {
        text: 'SOURCE',
        class: 'transactionLocation'

    });
    const amountHeaderEle = $('<th>', {
        text: 'AMOUNT',
        class: 'transactionAmount'
    });
    rowElement.append([typeHeaderEle, sourceHeaderEle, amountHeaderEle]);

    tableElement.append(rowElement);


    for (var obj of objList) {
        const typeEle = $('<td>', {
            text: obj.type,
            class: 'transactionType'
        });        
        const sourceEle = $('<td>', {
            text: obj.source,
            class: 'transactionLocation'
        });
        const amountEle = $('<td>', {
            text: obj.amount,
            class: 'transactionAmount'
        });
        const rowElement = $('<tr>');
        rowElement.append([typeEle, sourceEle, amountEle]);
        tableElement.append(rowElement);
    }
    $('#testArea').append(tableElement);

    $('#testArea *').addClass('testOutput');
    $('tr').addClass('transactionRecord')


}